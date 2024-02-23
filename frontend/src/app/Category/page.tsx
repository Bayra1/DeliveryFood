'use client'
import Navbar from "@/components/Navbar";
import { Button } from "@mui/material";
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import axios from "axios";

const backEnd = "http://localhost:8001/category/retAll"

const styleDiscount = {
    width: '66px',
    height: '27px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '27px',
    textDecorationLine: 'line-through',
    color: '#27272',
    flex: 'none',
    order: 1,
    flexGrow: 0,
};

const styleName = {
    width: '282px',
    height: '27px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '27px',
    color: '#000000',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
};

const buttonStyle = {
    width: '430px',
    height: '43px',
    padding: '8px 16px',
    borderRadius: '8px',
    border: '1px solid',
    gap: '8px',
    color: 'Black',
    fontWeight: 500,
    fontSize: '18px',
    borderColor: '#D6D8DB'
};

interface foodItem {
    image: string;
    name: string;
    discount: number;
    price: number;
    ingredient: string
};

interface categoryType {
    name: string
}

export default function MenuCategory() {
    const [selectedCategory, setSelectedCategory] = useState();
    const [isActive, setIsActive] = useState(0);
    const [filteredData, setFilteredData] = useState([])
    const [foodCards, setFoodCards] = useState<foodItem[]>([])

    const handleColor = (index: number) => {
        setIsActive(index);
    };

//    log soma chan
    const manageData = async () => {
        try {
            const response = await axios.get(backEnd);
            const allCategories = response.data.allCategories

            const filteredData = selectedCategory
                ? allCategories.filter((category: { name: string }) => category.name === selectedCategory)
                : allCategories


            setFilteredData(filteredData);
            // console.log('this is ', filteredData)

            localStorage.setItem('filteredData', JSON.stringify(filteredData));
            console.log('Filtered data after json:', filteredData);

            const foodCards = filteredData.length > 0 ? filteredData.foodIds[0] : [];
            setFoodCards(foodCards);

        } catch (error) {
            // console.log('Failed to fetch data', error);
        }
    };
   console.log(foodCards);
    useEffect(() => {
        manageData();
    }, [selectedCategory]);
    return (
        <Box>
            <Navbar />
            <Stack mt={10} width={'100%'} justifyContent={'center'} alignItems={'center'}>

                <Box width={'80%'} sx={{ display: 'flex' }} justifyContent={'space-between'}>
                    {filteredData.map((element, index) => {

                        return (
                            <Button
                                style={{ ...buttonStyle, backgroundColor: index === isActive ? "#18BA51" : "white" }}
                                key={index}
                                onClick={() => {
                                    handleColor(index)
                                    manageData()
                                }}
                            >
                                {(element as {name: string}).name}                                
                            </Button>
                        )
                    })}
                </Box>

                <Stack mt={10} sx={{ display: 'flex' }} flexDirection={'row'} justifyContent={'space-between'} gap={16}>
                    {
                        foodCards.map((item, i) => {
                            // console.log("this is foodCards", foodCards);
                            
                            return (
                                <Card key={i} sx={{ borderWidth: 1 }}>

                                    <CardContent>
                                       <img src={item.image} alt="" />
                                    </CardContent>
                                    <Typography>
                                        {item.name}
                                    </Typography>
                                    <Typography>
                                        {item.discount}
                                    </Typography>

                                </Card>
                            )
                        })
                    }
                </Stack>

            </Stack>
        </Box>
    )
};