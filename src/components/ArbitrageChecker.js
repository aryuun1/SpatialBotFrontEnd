import React, { useState } from "react";
import { getArbitrage, executeArbitrage } from "../api";
import { Card, CardContent, Typography, Button, TextField, Box, CircularProgress } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export default function ArbitrageChecker() {
  const [pair, setPair] = useState("ARB/USDT");
  const [arbData, setArbData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [execResult, setExecResult] = useState(null);

  const handleCheck = async () => {
    setLoading(true);
    setExecResult(null);
    const res = await getArbitrage(pair);
    setArbData(res.data);
    setLoading(false);
  };

  const handleExecute = async () => {
    setLoading(true);
    const res = await executeArbitrage(pair, true);
    setExecResult(res.data);
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
            <CurrencyExchangeIcon sx={{ mr: 1 }} />
            Arbitrage Checker
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField
              label="Pair"
              value={pair}
              onChange={e => setPair(e.target.value)}
              size="small"
              fullWidth
            />
            <Button 
              variant="contained" 
              onClick={handleCheck} 
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} /> : null}
            >
              Check
            </Button>
          </Box>
          <AnimatePresence mode="wait">
            {arbData && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography>
                    {arbData.arbitrage_opportunity
                      ? `Opportunity: ${arbData.percentage_difference}%`
                      : "No arbitrage opportunity"}
                  </Typography>
                  {arbData.arbitrage_opportunity && (
                    <Button 
                      variant="contained" 
                      color="success" 
                      onClick={handleExecute} 
                      disabled={loading}
                      sx={{ mt: 1 }}
                    >
                      Execute Arbitrage
                    </Button>
                  )}
                </Box>
              </motion.div>
            )}
            {execResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Box>
                  <Typography variant="subtitle2">Execution Result:</Typography>
                  <pre style={{ 
                    background: "#f5f5f5", 
                    padding: 16, 
                    borderRadius: 8,
                    overflow: 'auto'
                  }}>
                    {JSON.stringify(execResult, null, 2)}
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