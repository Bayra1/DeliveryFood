'use client'
import Navbar from "@/components/Navbar";
import { Button } from "@mui/material";
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CardContent from '@mui/material/CardContent';
import axios from "axios";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CSSProperties } from "styled-components";

const backEnd = "http://localhost:8001/category/retAll"

const styleDiscount: CSSProperties = {
    width: '70px',
    height: '35px',
    fontWeight: 400,
    fontSize: '18px',
    color: '#fff',
    backgroundColor: "#18BA51",
    textAlign: "center",
    borderRadius: "16px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#27272",
    position: "absolute",
    top: "16px",
    left: "197px",
    padding: "4px 16px",
};

const styleName = {
    width: '282px',
    height: '27px',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '27px',
    color: '#000000',
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

const stylePrice = {
    width: '69px',
    height: '27px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '27px',
    color: '#18BA51',
    flex: 'none',
    order: 0,
    flexGrow: 0,
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
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isActive, setIsActive] = useState(0);
    const [filteredData, setFilteredData] = useState([])
    const [foodCards, setFoodCards] = useState<foodItem[]>([])

    const handleColor = (index: number) => {
        setIsActive(index);
    };

    const getSelectedCategory = (event: any) => {
        setSelectedCategory(event.target.value)
    }

    const manageData = async () => {
        try {
            const response = await axios.get(backEnd);
            const allCategories = response.data.allCategories


            const filteredData = selectedCategory
                ? allCategories.filter((category: { name: string }) => category.name === selectedCategory)
                : allCategories

            console.log("this is selected category", selectedCategory);

            setFilteredData(filteredData);
            console.log('this is ', filteredData)

            localStorage.setItem('filteredData', JSON.stringify(filteredData));
            // console.log('Filtered data after json:', filteredData);

            const foodCards = filteredData.length > 0 ? filteredData[0].foodIds : [];
            setFoodCards(foodCards);
            console.log("this is foodCards", foodCards);
                    
        } catch (error) {
            console.log('Failed to fetch data', error);
        }
    };
    useEffect(() => {
        manageData();
    }, [selectedCategory]);
    return (
        <Box>
            <Navbar />
            <Stack mt={10} width={'100%'} justifyContent={'center'} alignItems={'center'}>

                <Box width={'80%'} sx={{ display: 'flex' }} gap={2} justifyContent={'space-between'}>
                    {filteredData.map((element, index) => {

                        return (
                            <Button
                                style={{ ...buttonStyle, backgroundColor: index === isActive ? "#18BA51" : "white" }}
                                key={index}
                                value={selectedCategory}
                                onChange={getSelectedCategory}
                                onClick={() => {
                                    handleColor(index)
                                    manageData()
                                }}
                            >
                                {(element as { name: string }).name}
                            </Button>
                        )
                    })}
                </Box>

                <Stack mt={10} sx={{ display: 'flex' }} flexDirection={'row'} justifyContent={'space-between'} width={"80%"} gap={2}>
                    {foodCards.slice(1, 5).map((item, i) => (                        
                            <Card key={i} sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <Stack>
                                        <CardMedia
                                            sx={{ width: "382px", height: "200px",  }}
                                            component="img"
                                            image={item.image}
                                            alt="food item"
                                        />
                                        <Typography style={styleDiscount}>{item.discount}%</Typography>
                                    </Stack>

                                    <CardContent>
                                        <Typography style={styleName}>{item.name}</Typography>
                                        <Stack mt={1} flexDirection={"row"}>
                                            <Typography style={stylePrice}>{item.price}₮</Typography>
                                            <Typography>{item.price - (item.price * (item.discount / 100))}₮</Typography>
                                        </Stack>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                </Stack>
            </Stack>
        </Box>
    )
};