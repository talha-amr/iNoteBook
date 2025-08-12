import React, { useEffect, useState } from 'react';
import { 
  Box,
  Container,
  Typography,
  Avatar,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip
} from '@mui/material';
import { Email, CalendarToday } from '@mui/icons-material';
import UserContext from '../context/UserContext';
import { useContext } from 'react';



function About({}) {  
  const[LoggedIn,setLoggedIn]=useState(false)
const context = useContext(UserContext)
const {user} =context
  const formattedDate = new Date(user.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
useEffect(()=>{
  if(user!=null)  {
    setLoggedIn(true)
  }
},[])
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      {LoggedIn?(<Paper elevation={2} sx={{ p: 4 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          textAlign: 'center',
          mb: 3
        }}>
          <Avatar 
            sx={{ 
              width: 100, 
              height: 100, 
              mb: 2,
              bgcolor: 'primary.main',
              fontSize: '2.5rem'
            }}
          >
            {user.name.charAt(0).toUpperCase()}
          </Avatar>
          <Typography variant="h4" component="h1">
            {user.name}
          </Typography>
          <Chip 
            label="Member" 
            color="primary" 
            variant="outlined" 
            size="small" 
            sx={{ mt: 1 }}
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        <List>
          <ListItem>
            <ListItemIcon>
              <Email color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Email" 
              secondary={user.email}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CalendarToday color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Member since" 
              secondary={formattedDate} 
            />
          </ListItem>
        </List>
      </Paper>):"Nothing to Show"
}
    </Container>
  );
}

export default About;