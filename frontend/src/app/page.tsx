'use client'
// Home component
import * as React from 'react';
import { Box } from '@mui/material';
import Navbar from "../components/Navbar";
import Modal from '@/components/LoginModal';
import HomePage from '@/components/Home';
import { GiveFoodData, foodContext } from "../components/Context";

export default function Home() {
  const [modal, setModal] = React.useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const test = React.useContext(foodContext);
  // console.log(test, 'test');
  
  return (
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} height="fit-content">
        <Navbar onClick={handleModal} />
        {modal && <Modal />}
        <HomePage />
      </Box>
  );
};
