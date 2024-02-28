"use client"
import * as React from 'react';
import { foodContext } from "@/components/Context";
import { Stack, Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Select, MenuItem, FormControlLabel, Checkbox, InputLabel, FormControl, FormLabel, FormHelperText, } from "@mui/material";
import Navbar from "@/components/Navbar";
import CheckIcon from '@mui/icons-material/Check';
const DistrictSelector = ["Баянзүрх дүүрэг", "Хан-Уул дүүрэг"]
export default function OrderDetail() {
    const { updatedFoodData, foodData }: any = useContext(foodContext);
    // console.log(foodData, "foodData");
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Navbar />
            <Box width={'70%'}>
                <Stack >
                    <Stack sx={{ display: 'flex', flexDirection: 'row', width: '432px', height: '100px', gap: '16px', padding: '16px 24px' }}>
                        <Stack sx={{ width: '48px', height: '48px', borderRadius: '50%', bgcolor: '#18BA51', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFF' }}>
                            <CheckIcon />
                        </Stack>
                        <Stack>
                            <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#8B8E95', lineHeight: '16.71px' }}>Алхам 1</Typography>
                            <Typography sx={{ fontWeight: 400, fontSize: '20px', color: '#000', lineHeight: '23.87px' }}>Хаягийн мэдээлэл оруулах</Typography>
                            <Typography sx={{ fontWeight: 400, fontSize: '16px', color: '#18BA51', lineHeight: '19.09px' }}>Оруулсан</Typography>
                        </Stack>
                    </Stack>

                    <Stack>
                        <Typography></Typography>
                        <FormControl sx={{ width: '432px' }}>
                            <Select
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <option defaultChecked={true} value="">Дүүрэг сонгоно уу</option>
                                {
                                    DistrictSelector.map((el, i) => {
                                        return (
                                            <MenuItem key={i} value={el}>
                                                {el}
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
};