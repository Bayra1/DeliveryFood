import React, { useEffect, useState } from 'react';
import { CardActionArea } from "@mui/material";
import { Typography } from '@mui/material';
import { CSSProperties } from "styled-components";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Title from './Title';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';
import CardContent from '@mui/material/CardContent';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const backEnd = "http://localhost:8001/food/retAllFoods"

interface Food {
    sale: Boolean,
    image: String,
    discount: Number,
    name: String,
    price: Number
};

const container = {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: 15,
};

const innerContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    flexDirection: 'column' as 'column',
};

const buttonClass = {
    width: 'fit-content',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#18BA51'
};

const disCategory = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5
};

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

const styleDiscountedPrice = {
    width: '69px',
    height: '27px',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '27px',
    color: '#18BA51',
};


export default function DiscountCards() {
    const [saleFoods, setSaleFoods] = useState<Food[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(backEnd);
                const allFoods = response.data.allFoods;
                // console.log(allFoods, "f");

                const foodsOnSale = allFoods.filter((el: Food) => el.sale === true)
                console.log(foodsOnSale, "test");
                setSaleFoods(foodsOnSale)

            } catch (error) {
                console.log("failed to get data", error);
            }
        };

        getData();
    }, []);



    return (
        <Box sx={container}>
            <Stack sx={innerContainer}>

                <Stack sx={disCategory}>
                    <Title title={'Хямдралтай'} />
                    <Stack style={buttonClass}>

                        <Button sx={{ color: '#18BA51' }}>
                            Бүгдийг харах
                        </Button>
                        <ArrowForwardIosIcon />
                    </Stack>
                </Stack>

                <Stack sx={{ display: 'flex' }} flexDirection={'row'} justifyContent={'space-between'} width={"100%"} gap={2}>
                    {saleFoods.map((item, i) => (                                                
                        <Card key={i} sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Stack>
                                    <CardMedia
                                        sx={{ width: "382px", height: "200px" }}
                                        component="img"
                                        image={item.image.valueOf()}
                                    />
                                    <Typography style={styleDiscount}>{item.discount.valueOf()}%</Typography>
                                </Stack>

                                <CardContent>
                                    <Typography style={styleName}>{item.name}</Typography>
                                    <Stack mt={1} flexDirection={"row"}>
                                        <Typography style={styleDiscountedPrice}>
                                            {item.discount.valueOf() > 0
                                                ? `${item.price.valueOf() - (item.price.valueOf() * (item.discount.valueOf() / 100))}₮`
                                                : `${item.price}`
                                            }
                                        </Typography>
                                        <Typography sx={{ textDecorationLine: 'line-through' }}>{item.price.valueOf()}₮</Typography>
                                    </Stack>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Stack>


            </Stack>
        </Box>
    );
}