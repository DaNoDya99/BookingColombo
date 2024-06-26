import { Button, Container, FormControl, Stack, Typography, MenuItem, Select, InputLabel } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

function OwnerNavbar() {
    const logout = () => {
        localStorage.removeItem('propertyOwner');
        localStorage.removeItem('traveller');
        localStorage.removeItem('admin');
        window.location.href = '/';
    }

  return (
    <Container >
      <div className="custom-image"></div>
      <Stack direction="row" justifyContent="space-around" className="text-container">
        <img src="/logo.png" className="logo"/>
        <Link to={'/'} style={{ color: 'white', textDecoration: 'none' }}>HOME</Link>
        {/* <Link style={{ color: 'white', textDecoration: 'none' }}>STAYS</Link> */}
        <Link to={'/propertyOwner/explore'} style={{ color: 'white', textDecoration: 'none' }}>EXPLORE MORE</Link>
        {/* <div className="colombo-text"> */}
          <Link to={'/propertyOwner/viewProperty'} style={{ color: 'white', textDecoration: 'none' }}>LIST YOUR PROPERTY</Link>
          <Link to={'/propertyOwner/profile'} style={{ color: 'white', textDecoration: 'none' }}>USER PROFILE</Link>
        {/* </div> */}
        <Link style={{ color: 'white', textDecoration: 'none' }} onClick={logout}> LOG OUT <LogoutIcon/></Link>
      </Stack>
    </Container>
  )
}

export default OwnerNavbar;
