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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import VisEyeIcon from '@mui/icons-material/VisibilityOutlined';
import OffEyeIcon from '@mui/icons-material/VisibilityOffTwoTone';


const pages = ['НҮҮР', 'ХООЛНЫ ЦЭС', 'ХҮРГЭЛТИЙН БҮС'];

function Navbar() {
  const [searchText, setSearchText] = useState<String>('');
  const [password, setPassword] = useState<String>('')
  const [isPassword, setIsPassword] = useState(false)
  const [open, setOpen] = useState(false)

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  const handleInputChange = (event: any) => {
    setSearchText(event.target.value);

  };

  const OpenModal = () => {
    setOpen(true)
  }

  const CloseModal = () => {
    setOpen(false)
  }

  const managePassword = () => {
    setIsPassword(!isPassword)
  }

  return (
    <AppBar sx={{ backgroundColor: "white" }} position="static">
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
                <Button variant='outlined' onClick={OpenModal} sx={{ color: "black", gap: "20px" }}>
                  <ProfileLogo />
                  Нэвтрэх
                </Button>

                <Dialog open={open} onClose={CloseModal}>
                  <DialogTitle sx={{ alignItems: "center", justifyContent: "center", display: "flex", color: "#0D1118", fontWeight: "700", fontSize: "29px", marginBottom: "48px" }}>Нэвтрэх</DialogTitle>

                  <DialogContent>
                    <DialogContentText sx={{ display: "flex", flexDirection: "column", }} gap={"30px"}>

                      <Stack>
                        <div style={{ color: "#000" }}>Имэйл </div>
                        <TextField sx={{ width: "500px" }} id="filled-basic" placeholder='Имэйл хаягаа оруулна уу' variant="filled" />
                      </Stack>

                      <Stack spacing={2}>
                        <div style={{ color: "#000" }}>Нууц үг</div>
                        <TextField
                          type={isPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          sx={{ width: "500px", position: "relative" }}
                          id="filled-basic"
                          placeholder='Нууц үг'
                          variant="filled"
                        />
                        <Button onClick={managePassword} sx={{ position: "absolute", right: "20px", bottom: "270px" }}>
                          {isPassword ? <OffEyeIcon /> : <VisEyeIcon />}
                        </Button>
                        {/* ReCover password */}
                        <Stack sx={{ width: "500px", alignItems: "flex-end" }}>
                          <Button sx={{ fontSize: "14px", fontWeight: "400", color: "#3F4145" }}>Нууц үг сэргээх</Button>
                        </Stack>
                      </Stack>


                      <Stack sx={{ gap: "32px" }}>
                        <Button sx={{ backgroundColor: 'red', borderRadius: '4px', color: 'grey' }}>Нэвтрэх</Button>
                        <div style={{ width: "500px", justifyContent: "center", textAlign: "center" }}>Эсвэл</div>
                        <Button sx={{ color: "black" }}>Бүртгүүлэх</Button>
                      </Stack>




                    </DialogContentText>
                  </DialogContent>


                </Dialog>

              </Box>

            </Stack>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;