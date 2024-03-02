'use client'
import { Box, Stack, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { foodContext } from "@/components/Context";


const backendGetAllOrders = "http://localhost:8001/order/retAll";

export default function ViewLast() {
    const [allDataOrder, setAllDataOrder] = useState([]);
    const { foodData } = useContext(foodContext)
    console.log(foodData, "this is foodContext");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(backendGetAllOrders);
                setAllDataOrder(response.data.allOrders)
            } catch (error) {
                console.log(error, "orderGet");
            }
        };
        fetchData()
    }, []);
    console.log(allDataOrder);

    const createDate = (dateOrder: any) => {
        const dates = new Date(dateOrder);
        const year = dates.getFullYear()
        const month = dates.getMonth()
        const day = dates.getDate()
        return `${year}/${month}/${day}`
    }

    return (
        <Box flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Navbar />

            <Box width={'70%'} justifyContent={'space-between'} display={'flex'} flexDirection={'row'} bgcolor={"brow"} mt={5}>
                <Stack boxShadow={'0px 0px 20px 0px rgba(0, 0, 0, 0.05)'} bgcolor={'rgba(255, 255, 255, 1)'} width={'fit-content'} height={'fit-content'} padding={'24px'} borderRadius={'16px'} display={'flex'} flexDirection={'column'}>
                    <Typography sx={{ fontWeight: 400, fontSize: "20px", lineHeight: "23.87px", color: "#000", fontFamily: 'SF-PRO' }}>Захиалгын түүх</Typography>
                    <Box>
                        {allDataOrder.map((el: { orderNumber: any, createdDate: any }, index: number) => (
                            <Stack key={index} sx={{ display: 'flex', flexDirection: 'row', width: '432px', height: '100px', gap: '16px', padding: '16px 24px' }}>
                                <Stack sx={{ width: '48px', height: '48px', borderRadius: '50%', bgcolor: '#0468C8', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFF' }}>
                                    <RadioButtonCheckedIcon />
                                </Stack>
                                <Stack>
                                    <Typography sx={{ fontWeight: 400, fontSize: '16px', color: '#272727', lineHeight: '19.09px' }}>Захиалга</Typography>
                                    <Stack sx={{ fontWeight: 400, fontSize: '14px', color: '#8B8E95', lineHeight: '16.71px' }}>
                                        #{el.orderNumber}
                                        <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#0468C8', lineHeight: '16.71px' }}>Хүлээгдэж байна</Typography>
                                    </Stack>
                                </Stack>
                                <Stack display={'flex'} justifyContent={'center'} mb={'15px'}>
                                    {createDate(el.createdDate)}
                                </Stack>
                            </Stack>
                        ))}
                    </Box>
                </Stack>
                <Stack boxShadow={'0px 0px 20px 0px rgba(0, 0, 0, 0.05)'} bgcolor={'rgba(255, 255, 255, 1)'} width={'fit-content'} height={'fit-content'} padding={'24px'} borderRadius={'16px'} display={'flex'} flexDirection={'column'}>
                    <Typography sx={{ fontWeight: 400, fontSize: "20px", lineHeight: "23.87px", color: "#000", fontFamily: 'SF-PRO' }}>Захиалгын дэлгэрэнгүй</Typography>
                    <Box>
                        {allDataOrder.map((el: { foods: any }, index: number) => (
                            <Stack key={index} sx={{ display: 'flex', flexDirection: 'row', width: '432px', height: '100px', gap: '16px', padding: '16px 24px' }}>
                                <Stack sx={{ fontWeight: 400, fontSize: '16px', color: '#272727', lineHeight: '19.09px' }}>
                                    {el.foods.map((el: any) => el.name)}
                                </Stack>
                                <Typography sx={{ fontWeight: 400, fontSize: '16px', color: '#272727', lineHeight: '19.09px' }}>
                                    {foodData.map((el: any) => `(${el.count})`)}
                                </Typography>
                            </Stack>
                        ))}
                    </Box>
                </Stack>
            </Box>

            <Footer />
        </Box>

    )
};