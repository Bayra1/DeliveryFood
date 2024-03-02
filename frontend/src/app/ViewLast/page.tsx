'use client'
import { Box, Stack, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import axios from "axios";
import { useEffect, useState } from "react";

const backendGetAllOrders = "http://localhost:8001/order/retAll";

export default function ViewLast() {
    const [allDataOrder, setAllDataOrder] = useState([])
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

    console.log(allDataOrder)

    // const test = allDataOrder.map((el:any) => ({
    //     order:el.orderNumber,
    //     date:el.createDate
    // }));
    // console.log(test, "test kk");
    


    return (
        <Box flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Navbar />

            <Box width={'70%'}>
                <Stack boxShadow={'0px 0px 20px 0px rgba(0, 0, 0, 0.05)'} bgcolor={'rgba(255, 255, 255, 1)'} width={'fit-content'} height={'fit-content'} padding={'24px'} borderRadius={'16px'} display={'flex'} flexDirection={'column'}>
                    <Typography sx={{ fontWeight: 400, fontSize: "20px", lineHeight: "23.87px", color: "#000", fontFamily: 'SF-PRO' }}>Захиалгын түүх</Typography>
                    <Stack sx={{ display: 'flex', flexDirection: 'row', width: '432px', height: '100px', gap: '16px', padding: '16px 24px' }}>
                        <Stack sx={{ width: '48px', height: '48px', borderRadius: '50%', bgcolor: '#0468C8', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFF' }}>
                            <RadioButtonCheckedIcon />
                        </Stack>
                        <Stack>
                            <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#8B8E95', lineHeight: '16.71px' }}>Алхам 1</Typography>
                            <Stack>
                                <Typography sx={{ fontWeight: 400, fontSize: '20px', color: '#000', lineHeight: '23.87px' }}>Захиалга</Typography>                                                     
                            </Stack>
                            <Typography sx={{ fontWeight: 400, fontSize: '16px', color: '#18BA51', lineHeight: '19.09px' }}>Хүлээгдэж байна</Typography>
                        </Stack>
                    </Stack>

                </Stack>
            </Box>

            <Footer />
        </Box>
    )
};