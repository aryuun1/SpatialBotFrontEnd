import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#60A5FA', // Brighter blue from the image
      light: '#93C5FD', // Lighter accent blue
      dark: '#1E40AF', // Deeper blue
    },
    background: {
      default: '#020617', // Very dark blue-black
      paper: '#0F172A', // Deep blue background
    },
    text: {
      primary: '#60A5FA', // Bright blue for primary text
      secondary: '#93C5FD', // Light blue for secondary text
    },
    divider: 'rgba(96, 165, 250, 0.12)', // Blue divider
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    allVariants: {
      letterSpacing: '0.02em',
    },
    h1: {
      background: 'linear-gradient(180deg, #93C5FD 0%, #60A5FA 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 700,
    },
    h4: {
      background: 'linear-gradient(180deg, #93C5FD 0%, #60A5FA 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 600,
    },
    h6: {
      color: '#fff',
      fontWeight: 500,
      letterSpacing: '0.05em',
    },
    body1: {
      color: '#E2E8F0', // Softer white for better readability
      lineHeight: 1.7,
    },
    body2: {
      color: '#94A3B8', // Soft blue-grey
      lineHeight: 1.7,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15, 23, 42, 0.8)', // Semi-transparent dark blue
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(96, 165, 250, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15, 23, 42, 0.6)', // Semi-transparent dark blue
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(96, 165, 250, 0.1)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 40px rgba(96, 165, 250, 0.15)',
            borderColor: 'rgba(96, 165, 250, 0.2)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 20px rgba(96, 165, 250, 0.3)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #93C5FD 0%, #60A5FA 100%)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(96, 165, 250, 0.5)',
              },
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#60A5FA',
                borderWidth: '2px',
                boxShadow: '0 0 15px rgba(96, 165, 250, 0.2)',
              },
            },
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0,0,0,0.1)',
    // ... add more shadow definitions if needed
    '0 8px 30px rgba(0,0,0,0.2)',
  ],
});

export default theme; 