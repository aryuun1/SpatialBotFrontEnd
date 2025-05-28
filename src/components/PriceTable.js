import React, { useEffect, useState } from "react";
import { getPrice } from "../api";
import { Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody, Skeleton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function PriceTable() {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getPrice("ARB/USDT"),
      getPrice("ARB/USDC")
    ]).then(responses => {
      setPrices(responses.flatMap(r => Array.isArray(r.data) ? r.data : [r.data]));
      setLoading(false);
    });
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1
      }
    })
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
            <TrendingUpIcon sx={{ mr: 1 }} />
            Market Prices
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Pair</TableCell>
                <TableCell>DEX</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <AnimatePresence>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={3}>
                      <Skeleton height={40} />
                    </TableCell>
                  </TableRow>
                ) : (
                  prices.map((p, i) => (
                    <motion.tr
                      key={i}
                      custom={i}
                      variants={rowVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <TableCell>{p.base_token}/{p.quote_token}</TableCell>
                      <TableCell>{p.dex}</TableCell>
                      <TableCell>{p.price}</TableCell>
                    </motion.tr>
                  ))
                )}
              </AnimatePresence>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
}