import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <div style={{ padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Welcome Banner */}
      <Paper elevation={3} style={{ padding: '30px', backgroundColor: '#1976d2', color: 'white', marginBottom: '30px', borderRadius: '12px' }}>
        <Typography variant="h3" component="h1" gutterBottom style={{ fontWeight: 'bold' }}>
          Welcome to Finance Hub
        </Typography>
        <Typography variant="h6">
          Manage your accounts, calculate loans, and securely access your portal.
        </Typography>
      </Paper>

      {/* Main Grid Layout for Features */}
      <Grid container spacing={4}>
        
        {/* Feature 1: EMI Calculator Quick Access */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} style={{ padding: '20px', borderRadius: '12px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold', color: '#1976d2' }}>
                📊 EMI Calculator
              </Typography>
              <Typography variant="body1" color="textSecondary" style={{ marginBottom: '20px' }}>
                Plan your loans better. Calculate your monthly Home Loan, Car Loan, or Personal Loan EMI instantly with our smart calculator tool.
              </Typography>
            </div>
            <Button variant="contained" color="primary" fullWidth size="large">
              Go to EMI Calculator
            </Button>
          </Paper>
        </Grid>

        {/* Feature 2: User Login Profile */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} style={{ padding: '20px', borderRadius: '12px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold', color: '#2e7d32' }}>
                🔐 Secure Portal
              </Typography>
              <Typography variant="body1" color="textSecondary" style={{ marginBottom: '20px' }}>
                Access your personal dashboard to track previous transactions, save your custom EMI calculations, and manage your user profile securely.
              </Typography>
            </div>
            <Button variant="outlined" color="success" fullWidth size="large">
              Open Login Page
            </Button>
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}

export default Home;
