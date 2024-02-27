import { Box, Stack, Button, Typography } from "@mui/material";
import { Key, useContext, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { foodContext } from "./Context";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const style = {
    position: 'absolute',
    top: '50%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: '586px',
    height: '100vh',
    bgcolor: '#FFF',
    boxShadow: 24,
    p: 4,
    borderRadius: '16px'
};

export function BasketCard({ displayBasket }: any) {
    const {foodData, toBasket, renewFoodData} = useContext(foodContext)
    console.log(toBasket, "this is basket");
    console.log(foodData, "this is foodData");
    
    

    return (
        <Box>
            <Box sx={style}>

                <Stack style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', borderStyle: 'solid', borderBottomWidth: '1px', borderBottomColor: '#D6D8DB', paddingBottom: 12 }}>
                    <Button sx={{ width: 'fit-content', color: 'black', }}>
                        <ArrowBackIosIcon />
                    </Button>
                    <Typography sx={{ color: 'black', fontWeight: 900, fontSize: '20px', lineHeight: '30px', }}>Таны сагс</Typography>
                    <Typography></Typography>
                </Stack>

                <Stack sx={{ borderStyle: 'solid', borderBottomWidth: '1px', borderBottomColor: '#D6D8DB', paddingBottom: 5 }} display={'flex'} flexDirection={'row'} mt={6} gap={2}>
                    <img style={{ width: '245px', height: '150px' }} src="https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mVCjB57DPZnnqXyOgchsHO~Yw~rd2jPx5sAXMfrEZAnSfSAkUaP9kiv1lZAX-qbdUHSdHZYavW63zEjz80dcw7KeGg9RemL-lGR2g3VmF~s6xqv0qtsbRP6wWPMuKaapu~UwU7-JJxt5rKsLMC45qkQMKOkxYPbfK-W0YRzpZXrOufiT1yFdxDfcPrlihDFxKl~wSQzLgpyyPC-eZLY1y-7dp-ArFA-JE7LDCDGHDQxPsmn0yMdY3xSJaRi1nYAhQvIHfLV3SrJg6E2Ekm94BSPO4aV1ltOkfBcDVurFMXNrglvJPCPy8A3YIzSnFsXXh3c28PX9rIKu64YbTXxxwg__" alt="" />
                    <Stack>
                        <Typography sx={{ fontWeight: 700, fontSize: '18px', lineHeight: '27px', fontFamily: 'Poppins' }}>Main Pizza</Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '18px', lineHeight: '27px', color: '#18BA51', fontFamily: 'Poppins' }}>34800₮</Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '19.09px', color: '#767676' }}>Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр</Typography>

                        <Stack mt={2} alignItems={'baseline'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                            <Button style={{ backgroundColor: '#18BA51' }} sx={{ width: '45px', height: '40px', borderRadius: '10px', padding: '0 30px', fontSize: '14px', color: '#FFF' }}>-</Button>
                            <Typography sx={{ width: '45px', height: '40px', borderRadius: '10px', padding: '0 30px', fontSize: '14px' }}>0</Typography>
                            <Button style={{ backgroundColor: '#18BA51' }} sx={{ width: '45px', height: '40px', borderRadius: '10px', padding: '0 30px', fontSize: '14px', color: '#FFF' }}>+</Button>
                        </Stack>

                    </Stack>
                </Stack>

                <Stack bottom={0} mt={50} gap={4} display={'flex'} justifyContent={'space-between'} width={'100%'} flexDirection={'row'}>
                    <Stack sx={{ width: '240px', height: '48px', padding: '8px 16px' }}>
                        <Typography sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '19.09px', color: '#767676' }}>Нийт төлөх дүн</Typography>
                        <Typography>34,800₮</Typography>
                    </Stack>
                    <Button sx={{ width: '240px', height: '48px', padding: '8px 16px' }} style={{ backgroundColor: '#18BA51', color: "#FFF" }}>Захиалах</Button>
                </Stack>

            </Box>
        </Box>
    );
};
