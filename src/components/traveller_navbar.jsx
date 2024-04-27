import { Button, Container, FormControl, Stack, Typography, MenuItem, Select, InputLabel } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

function TravellerNavbar() {
  return (
    <Container >
      <div className="custom-image"></div>
      <Stack direction="row" justifyContent="space-around" className="text-container">
        <img src="/logo.png" className="logo"/>
        <Link style={{ color: 'white', textDecoration: 'none' }}>HOME</Link>
        <Link style={{ color: 'white', textDecoration: 'none' }}>STAYS</Link>
        <Link style={{ color: 'white', textDecoration: 'none' }}>EXPLORE MORE</Link>
        <div className="colombo-text">
          <Link to={'/traveller/property'} style={{ color: 'white', textDecoration: 'none' }}>LIST YOUR PROPERTY</Link>
          <Link to={'/traveller/profile'} style={{ color: 'white', textDecoration: 'none' }}>USER PROFILE</Link>
        </div>
        <Link to={'/'} style={{ color: 'white', textDecoration: 'none' }}> LOG OUT <LogoutIcon/></Link>
      </Stack>
    </Container>
  )
}

export default TravellerNavbar;