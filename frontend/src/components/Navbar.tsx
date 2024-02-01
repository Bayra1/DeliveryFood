"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PineconeLogo from './icons/PIneCone';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";
import IconButton from '@mui/material/IconButton';
import BasketLogo from './icons/BasketLogo';
import ProfileLogo from './icons/ProfileLogo';
import { useState } from "react";


const pages = ['НҮҮР', 'ХООЛНЫ ЦЭС', 'ХҮРГЭЛТИЙН БҮС'];

function Navbar({ onClick }: any) {
  const [searchText, setSearchText] = useState<String>('');

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  const handleInputChange = (event: any) => {
    setSearchText(event.target.value);

  };

  return (
    <AppBar sx={{ backgroundColor: "white", boxShadow: 0 }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PineconeLogo />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* Search Input */}

          <Box>
            <div>
              <TextField
                label="Search"
                variant="outlined"
                value={searchText}
                onChange={(event) => handleInputChange(event)}
              />
              <IconButton sx={{ position: "relative" }} onClick={handleSearch} color="primary" aria-label="search">
                <SearchIcon sx={{ position: "absolute", right: "25px", top: "10px" }} />
              </IconButton>
            </div>
          </Box>

          <Box>
            <Stack direction="row">
              <Button sx={{ color: "black", gap: "20px" }}>
                <BasketLogo />
                Сагс
              </Button>

              {/* Button to open Modal */}
              <Box>
                <Button onClick={onClick} variant='outlined' sx={{ color: "black", gap: "20px", border: "white" }}>
                  <ProfileLogo />
                  Нэвтрэх
                </Button>
              </Box>

            </Stack>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;