import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertMessage() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert variant="outlined" severity="info" 
    sx={{
         color: '#ffffff', 
         fontFamily: 'var(--font-family)', 
         borderRadius: '12px', 
         width: '250px',
         boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);'
    }}>This version is not stable!</Alert>
    </Stack>
  );
}