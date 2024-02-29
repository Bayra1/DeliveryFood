"use client"
import * as React from 'react';
import { foodContext } from "@/components/Context";
import { orderContext } from "@/components/OrderContext";
import { Stack, Box, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { ProvideOrderData } from "@/components/OrderContext";
import Navbar from "@/components/Navbar";
import CheckIcon from '@mui/icons-material/Check';
import Footer from '@/components/Footer';
import CloseIcon from '@mui/icons-material/Close';
import StepOne from '@/components/OrderDetail/StepOne';
import OrderLocInfo from '@/components/OrderLocaInfo';

export default function OrderDetail() {
    const { foodData }: any = useContext(foodContext);
    const { orderLocationData, setOrderLocationData }: any = useContext(orderContext);
    React.useEffect(() => {
        // console.log(orderLocationData, "test");
    }, [orderLocationData])

    return (
        <ProvideOrderData>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Navbar />
                <Box width={'80%'} mt={10} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                    <Stack display={'flex'} flexDirection={'column'} gap={5}>
                        <StepOne />
                        <OrderLocInfo />
                    </Stack>
                    {/* step2 */}
                    <Stack display={'flex'} flexDirection={'column'} gap={5}>
                        <Stack sx={{ display: 'flex', flexDirection: 'row', width: '432px', height: '100px', gap: '16px', padding: '16px 24px' }}>
                            <Stack sx={{ width: '48px', height: '48px', borderRadius: '50%', bgcolor: '#18BA51', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFF' }}>
                                <CheckIcon />
                            </Stack>
                            <Stack>
                                <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#8B8E95', lineHeight: '16.71px' }}>Алхам 2</Typography>
                                <Typography sx={{ fontWeight: 400, fontSize: '20px', color: '#000', lineHeight: '23.87px' }}>Захиалга баталгаажуулах</Typography>
                                <Typography sx={{ fontWeight: 400, fontSize: '16px', color: '#18BA51', lineHeight: '19.09px' }}>Оруулсан</Typography>
                            </Stack>
                        </Stack>

                        <Stack boxShadow={'0px 0px 20px 0px rgba(0, 0, 0, 0.05)'} bgcolor={'rgba(255, 255, 255, 1)'} width={'432px'} height={'700px'} padding={'24px'} borderRadius={'16px'} display={'flex'} flexDirection={'column'} gap={'40px'}>
                            {foodData && (
                                foodData.map((item: any, i: any) => (
                                    <Stack key={i} sx={{ borderStyle: 'solid', borderBottomWidth: '1px', borderBottomColor: '#D6D8DB', paddingBottom: 5 }} display={'flex'} flexDirection={'row'} gap={2}>
                                        <img style={{ width: '245px', height: '150px' }} src={item.image} />
                                        <Stack>
                                            <Button style={{ position: 'absolute', margin: '0 160px', marginRight: 15, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <CloseIcon />
                                            </Button>

                                            <Typography sx={{ fontWeight: 700, fontSize: '18px', lineHeight: '27px', fontFamily: 'Poppins', color: 'black' }}>{item.name}</Typography>
                                            <Typography sx={{ fontWeight: 600, fontSize: '18px', lineHeight: '27px', color: '#18BA51', fontFamily: 'Poppins' }}>{item.price}₮</Typography>
                                            <Typography sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '19.09px', color: '#767676' }}>{item.ingredient}</Typography>

                                            <Stack mt={2} alignItems={'baseline'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                                                <Button style={{ backgroundColor: '#18BA51' }} sx={{ width: '45px', height: '40px', borderRadius: '10px', padding: '0 30px', fontSize: '14px', color: '#FFF' }}>-</Button>
                                                <Typography sx={{ width: '45px', height: '40px', borderRadius: '10px', padding: '0 30px', fontSize: '14px', color: 'black' }}>{item.count}</Typography>
                                                <Button style={{ backgroundColor: '#18BA51' }} sx={{ width: '45px', height: '40px', borderRadius: '10px', padding: '0 30px', fontSize: '14px', color: '#FFF' }}>+</Button>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                )))}
                            <Stack gap={4} display={'flex'} justifyContent={'space-between'} width={'100%'} flexDirection={'row'}>
                                <Stack sx={{ width: '240px', height: '48px', padding: '8px 16px' }}>
                                    <Typography sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '19.09px', color: '#767676' }}>Нийт төлөх дүн</Typography>
                                    <Typography color={"black"}>1500₮</Typography>
                                </Stack>
                                <Button sx={{ width: '240px', height: '48px', padding: '8px 16px' }} style={{ backgroundColor: '#18BA51', color: "#FFF" }}>Захиалах</Button>
                            </Stack>

                        </Stack>

                    </Stack>
                </Box>
                <Footer />
            </Box>
        </ProvideOrderData>
    )
};