import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Wallet', icon: <AccountBalanceWalletIcon /> },
    { path: '/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { path: '/monitor', label: 'Monitor', icon: <MonitorHeartIcon /> },
    { path: '/arbitrage', label: 'Arbitrage', icon: <CurrencyExchangeIcon /> },
  ];

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        background: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(96, 165, 250, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar sx={{ py: 1 }}>
        <Typography 
          variant="h6" 
          component={Link} 
          to="/"
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            alignItems: 'center',
            textDecoration: 'none',
            color: '#93C5FD',
            fontWeight: 600,
            letterSpacing: '0.02em',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#60A5FA',
              transform: 'translateY(-1px)',
            }
          }}
        >
          <CurrencyExchangeIcon 
            sx={{ 
              mr: 1.5,
              fontSize: '28px',
              filter: 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.3))'
            }} 
          />
          Spatial Bot
        </Typography>
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 0.5,
            background: 'rgba(15, 23, 42, 0.5)',
            padding: '4px',
            borderRadius: '12px',
            border: '1px solid rgba(96, 165, 250, 0.1)',
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              startIcon={item.icon}
              sx={{
                px: 2,
                py: 1,
                color: location.pathname === item.path ? '#fff' : '#93C5FD',
                backgroundColor: location.pathname === item.path 
                  ? 'rgba(96, 165, 250, 0.15)' 
                  : 'transparent',
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(96, 165, 250, 0.2)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 20px rgba(96, 165, 250, 0.15)',
                },
                '& .MuiSvgIcon-root': {
                  fontSize: '20px',
                  transition: 'all 0.3s ease',
                },
                '&:hover .MuiSvgIcon-root': {
                  transform: 'scale(1.1)',
                },
                ...(location.pathname === item.path && {
                  background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
                  boxShadow: '0 4px 20px rgba(96, 165, 250, 0.2)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.25) 0%, rgba(59, 130, 246, 0.25) 100%)',
                  }
                })
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
} 