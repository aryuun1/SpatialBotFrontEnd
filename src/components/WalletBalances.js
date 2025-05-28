import React, { useState } from "react";
import { getEthBalance, getArbBalance } from "../api";
import { Card, CardContent, Typography, Grid, Skeleton, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function WalletBalances() {
  const [eth, setEth] = useState(null);
  const [arb, setArb] = useState(null);
  const [walletId, setWalletId] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [loading, setLoading] = useState(false);

  const   fetchBalances = async (wallet_address, private_key) => {
    try {
      const [ethRes, arbRes] = await Promise.all([
        getEthBalance(wallet_address, private_key),
        getArbBalance(wallet_address, private_key)
      ]);
      setEth(ethRes.data.balance);
      setArb(arbRes.data.balance);
    } catch (error) {
      console.error("Failed to fetch balances:", error);
      throw error;
    }
  };

  const handleConnectWallet = async () => {
    if (!walletId) {
      alert("Please enter Wallet ID");
      return;
    }

    setLoading(true);
    try {
      await fetchBalances(walletId, privateKey);
      
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      alert(error.response?.data?.detail || "Failed to connect wallet. Please try again.");
    } finally {
      setLoading(false);
    }
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
            <AccountBalanceWalletIcon sx={{ mr: 1 }} />
            Wallet Configuration
          </Typography>
          
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Wallet Address"
                variant="outlined"
                value={walletId}
                onChange={(e) => setWalletId(e.target.value)}
                disabled={loading}
                sx={{ mb: 2 }}
                placeholder="Enter your wallet address"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Private Key (Optional)"
                variant="outlined"
                type="password"
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
                disabled={loading}
                sx={{ mb: 2 }}
                placeholder="Enter your private key (optional)"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleConnectWallet}
                disabled={loading || !walletId}
                sx={{
                  py: 1.5,
                  backgroundColor: '#1976d2',
                  '&:hover': {
                    backgroundColor: '#1565c0'
                  }
                }}
              >
                {loading ? "Connecting..." : "Connect Wallet"}
              </Button>
            </Grid>
          </Grid>

          <Typography variant="h6" sx={{ mb: 2 }}>
            Wallet Balances
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Typography variant="subtitle1" color="text.secondary">ETH Balance</Typography>
                <Typography variant="h6">
                  {eth !== null ? eth : <Skeleton width={100} />}
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={6}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Typography variant="subtitle1" color="text.secondary">ARB Balance</Typography>
                <Typography variant="h6">
                  {arb !== null ? arb : <Skeleton width={100} />}
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </motion.div>
  );
}