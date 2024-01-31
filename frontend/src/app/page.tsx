'use client'
// Home component
import * as React from 'react';
import { Box } from '@mui/material';
import Navbar from "../components/Navbar";
import Modal from '@/components/Modal';
import Login from '@/components/Login';
import Footer from '@/components/Footer';
import SignUp from '@/components/SignUp';

export default function Home() {
  const [modal, setModal] = React.useState(false);

  const handleModal = () => {
    setModal(!modal);
    console.log(!modal);
    console.log('first');
  }

  return (
    <Box height="fit-content">
      <Navbar onClick={handleModal} />
      {modal && <Modal />}
      {/* <Login /> */}
      <SignUp/>
      {/* <Footer/> */}
    </Box>
  );
}
