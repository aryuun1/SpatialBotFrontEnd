import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import WalletBalances from '../components/WalletBalances';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom
            sx={{ 
              mb: 4, 
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#1976d2'
            }}
          >
            Welcome to Spatial Bot
          </Typography>
        </motion.div>
        <WalletBalances />
      </Box>
    </Container>
  );
} 