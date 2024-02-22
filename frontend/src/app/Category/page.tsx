'use client'
import Navbar from "@/components/Navbar";
import { Button } from "@mui/material";
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
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
    width: '280.5px',
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

const filtersName = ['BreaksFast', 'Soup', 'Main Course', 'Desserts'];

export default function MenuCategory() {
    const [selectedCategory, setSelectedCategory] = useState(filtersName[0]);
    const [isActive, setIsActive] = useState(0);
    const [filteredData, setFilteredData] = useState([])

    const handleColor = (index: number) => {
        setSelectedCategory(filtersName[index]);
        setIsActive(index);
    };

    const manageData = async () => {
        try {
            const response = await axios.get(backEnd);
            // console.log('Response from backend:', response.data.allCategories);

            const filteredData = response.data.allCategories.filter((category: { name: string }) => category.name === selectedCategory)
            setFilteredData(filteredData)
            console.log('Filtered data:', filteredData);
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

                <Box width={'80%'} sx={{ display: 'flex' }} justifyContent={'space-between'}>
                    {filtersName.map((element, index) => {
                        return (
                            <Button
                                style={{ ...buttonStyle, backgroundColor: index === isActive ? "#18BA51" : "white" }}
                                key={index}
                                onClick={() => {
                                    handleColor(index)
                                    manageData()
                                }}
                            >
                                {element}
                            </Button>
                        )
                    })}
                </Box>

                <Stack mt={10} sx={{ display: 'flex' }} flexDirection={'row'} justifyContent={'space-between'} gap={16}>
                {filteredData.map((category, index) => (
                    <Card key={index} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt={category.name}
                            height="140"
                            image={category.image} // Assuming each category has an image property
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {category.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {/* Display additional information about the category */}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))}
                    
                </Stack>

            </Stack>
        </Box>
    )
}