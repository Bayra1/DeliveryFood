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
import { useRouter } from "next/navigation";
import { BasketCard } from "@/components/BasketCardModal";
import { orderContext } from './OrderContext';

const pages = ['НҮҮР', 'ХООЛНЫ ЦЭС', 'ХҮРГЭЛТИЙН БҮС'];

function Navbar({ onClick, displayBasket, closeBasket }: any) {
  const [searchText, setSearchText] = useState<String>('');
  const [isActive, setIsActive] = useState(0);
  const [displayBasketModal, setDisplayBasketModal] = useState<Boolean>(false);
  const router = useRouter();

  const handleColor = (index: number) => {
    setIsActive(index)
  };

  const NavigateCat = () => {
    router.push('/Menu')
  };

  const NavigateHome = () => {
    router.push('/Home')
  };

  const NavigateDelZone = () => {
    router.push('/DeliveryZone')
  };

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  const handleInputChange = (event: any) => {
    setSearchText(event.target.value);

  };

  const handleToggleBasket = () => {
    setDisplayBasketModal(true);
  };

  const closeBasketModal = () => {
    setDisplayBasketModal(false);
    // console.log(setDisplayBasketModal(false));
    // console.log("tes");

  };



  return (
    <AppBar sx={{ backgroundColor: "white", boxShadow: 0, }} position="static">
      <Container style={{ maxWidth: '80%' }}>
        <Toolbar disableGutters >
          <PineconeLogo />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', } }}>
            {pages.map((page, index) => (
              <Button
                style={{ color: index === isActive ? '#18BA51' : 'black' }}
                onClick={() => {
                  handleColor(index)
                  if (index === 0) {
                    NavigateHome()
                  } else if (index === 1) {
                    NavigateCat()
                  } else if (index === 2) {
                    NavigateDelZone()
                  }
                }}
                key={index}
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
              <Button onClick={handleToggleBasket} sx={{ color: "black", gap: "20px" }}>
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
        {
          displayBasketModal && (
            <BasketCard
              displayBasket={displayBasket}
              closeBasket={closeBasketModal}
            />
          )
        }
      </Container>
    </AppBar>
  );
}

export default Navbar;