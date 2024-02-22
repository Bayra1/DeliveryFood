'use client'
// Home component
import * as React from 'react';
import { Box } from '@mui/material';
import Navbar from "../components/Navbar";
import Modal from '@/components/Modal';
import Login from '@/components/Login';
import Footer from '@/components/Footer';
import YourComponent from '@/components/Test';
import HomePage from '@/components/Home';
import FoodCrud from '@/components/FoodCrud';

export default function Home() {
  const [modal, setModal] = React.useState(false);

  const handleModal = () => {
    setModal(!modal);
    console.log(!modal);
    console.log('first');
  }

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} height="fit-content">
      <Navbar onClick={handleModal} />
      {modal && <Modal />}
      <HomePage/>
      {/* <FoodCrud/> */}
      {/* <SignUp/> */}
      {/* <Footer/> */}
    </Box>
  );
}
