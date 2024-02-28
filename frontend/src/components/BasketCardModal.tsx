import { Box, Stack, Button, Typography } from "@mui/material";
import { Key, useContext, useEffect, useState } from "react";
import { foodContext } from "./Context";
import { useRouter } from "next/navigation";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import React from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '87%',
    transform: 'translate(-50%, -50%)',
    width: '586px',
    height: '100vh',
    bgcolor: '#FFF',
    boxShadow: 24,
    p: 4,
    borderRadius: '16px',
    zIndex: 1
};

export function BasketCard({ closeBasket }: any) {
    const { foodData, renewFoodData } = useContext(foodContext);
    const router = useRouter();

    const foodDataArray = foodData as { _id(_id: any): void; image: String, name: String, count: Number, ingredient: String, price: Number }[];
    // console.log(foodData.map((el) => el._id));
    console.log(foodData.map((el) => el.discount));
    
    
    const totalPrice = () => {
        let total = 0;
        (foodData as { _id: string, selectedFood: any, count: number, price: number }[]).forEach((el) => total = total + el.price * el.count)
        return total;
    };

    // console.log(foodData.map((el) => el._id), "testId");


    const removeFoodData = (_id: any) => {
        const indexToRemove = foodData.findIndex((el) => el._id === _id)
        if (indexToRemove !== -1) {
            const newFoodData = [...foodData]
            console.log(newFoodData, "before");

            newFoodData.splice(indexToRemove, 1);
            renewFoodData(newFoodData);
            console.log(newFoodData, "this is a new Array of Foods");
        };
    };

    const NavigateToOrderDetail = () => {
        router.push('/OrderDetail');
    };

    return (
        <Box sx={style}>
            <Stack style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', borderStyle: 'solid', borderBottomWidth: '1px', borderBottomColor: '#D6D8DB', paddingBottom: 12 }}>
                <Button onClick={closeBasket} sx={{ width: 'fit-content', color: 'black', }}>
                    <ArrowBackIosIcon />
                </Button>
                <Typography sx={{ color: 'black', fontWeight: 900, fontSize: '20px', lineHeight: '30px', }}>Таны сагс</Typography>
                <Typography></Typography>
            </Stack>
            {foodDataArray.map((item, i) => (
                <Stack key={i} sx={{ borderStyle: 'solid', borderBottomWidth: '1px', borderBottomColor: '#D6D8DB', paddingBottom: 5 }} display={'flex'} flexDirection={'row'} mt={6} gap={2}>
                    <img style={{ width: '245px', height: '150px' }} src={item.image as string} />
                    <Stack>
                        <Button onClick={() => removeFoodData(item._id)} style={{ position: 'absolute', right: 0, marginRight: 15, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CloseIcon />
                        </Button>

                        <Typography sx={{ fontWeight: 700, fontSize: '18px', lineHeight: '27px', fontFamily: 'Poppins', color: 'black' }}>{item.name as string}</Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '18px', lineHeight: '27px', color: '#18BA51', fontFamily: 'Poppins' }}>{item.price as number}₮</Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '19.09px', color: '#767676' }}>{item.ingredient}</Typography>

                        <Stack mt={2} alignItems={'baseline'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                            <Button style={{ backgroundColor: '#18BA51' }} sx={{ width: '45px', height: '40px', borderRadius: '10px', padding: '0 30px', fontSize: '14px', color: '#FFF' }}>-</Button>
                            <Typography sx={{ width: '45px', height: '40px', borderRadius: '10px', padding: '0 30px', fontSize: '14px', color: 'black' }}>{item.count as number}</Typography>
                            <Button style={{ backgroundColor: '#18BA51' }} sx={{ width: '45px', height: '40px', borderRadius: '10px', padding: '0 30px', fontSize: '14px', color: '#FFF' }}>+</Button>
                        </Stack>
                    </Stack>
                </Stack>
            ))}
            <Stack bottom={0} position={'absolute'} mb={4} mt={1} left={0} gap={4} display={'flex'} justifyContent={'space-between'} width={'100%'} flexDirection={'row'}>
                <Stack sx={{ width: '240px', height: '48px', padding: '8px 16px' }}>
                    <Typography sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '19.09px', color: '#767676' }}>Нийт төлөх дүн</Typography>
                    <Typography color={"black"}>{totalPrice()}₮</Typography>
                </Stack>
                <Button onClick={NavigateToOrderDetail} sx={{ width: '240px', height: '48px', padding: '8px 16px' }} style={{ backgroundColor: '#18BA51', color: "#FFF" }}>Захиалах</Button>
            </Stack>
        </Box>

    );
};