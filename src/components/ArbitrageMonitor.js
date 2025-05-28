import React, { useState } from "react";
import { monitorArbitrage } from "../api";
import { Card, CardContent, Typography, Button, TextField, Box, CircularProgress } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

export default function ArbitrageMonitor() {
  const [params, setParams] = useState({
    pair: "ARB/USDT",
    threshold: 1.0,
    max_amount: "",
    duration: 60,
    interval: 5,
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleMonitor = async () => {
    setLoading(true);
    setResult(null);
    const res = await monitorArbitrage(params);
    setResult(res.data);
    setLoading(false);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ mb: 2, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <MonitorHeartIcon sx={{ mr: 1 }} />
            Arbitrage Monitor
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: 'wrap' }}>
            <TextField 
              label="Pair" 
              name="pair" 
              value={params.pair} 
              onChange={handleChange} 
              size="small"
              sx={{ flex: 1, minWidth: 200 }}
            />
            <TextField 
              label="Threshold (%)" 
              name="threshold" 
              value={params.threshold} 
              onChange={handleChange} 
              size="small"
              type="number"
              sx={{ flex: 1, minWidth: 200 }}
            />
            <TextField 
              label="Max Amount" 
              name="max_amount" 
              value={params.max_amount} 
              onChange={handleChange} 
              size="small"
              sx={{ flex: 1, minWidth: 200 }}
            />
            <TextField 
              label="Duration (s)" 
              name="duration" 
              value={params.duration} 
              onChange={handleChange} 
              size="small"
              type="number"
              sx={{ flex: 1, minWidth: 200 }}
            />
            <TextField 
              label="Interval (s)" 
              name="interval" 
              value={params.interval} 
              onChange={handleChange} 
              size="small"
              type="number"
              sx={{ flex: 1, minWidth: 200 }}
            />
            <Button 
              variant="contained" 
              onClick={handleMonitor} 
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} /> : null}
              sx={{ minWidth: 120 }}
            >
              Monitor
            </Button>
          </Box>
          <AnimatePresence mode="wait">
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Box>
                  <Typography variant="subtitle2">Monitor Result:</Typography>
                  <pre style={{ 
                    background: "#f5f5f5", 
                    padding: 16, 
                    borderRadius: 8,
                    maxHeight: 300, 
                    overflow: "auto" 
                  }}>
                    {JSON.stringify(result, null, 2)}
                  </pre>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}