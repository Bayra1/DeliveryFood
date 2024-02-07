import Home from "../page";

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
      <HomePage/>
      {/* <SignUp/> */}
      {/* <Footer/> */}
    </Box>
  );
}
