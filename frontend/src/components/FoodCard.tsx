import { Box, Stack } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { CSSProperties } from "styled-components";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface FoodTypes {
    food: {
        name: string;
        price: number;
        image: string;
        discount: number;
    }
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

export default function FoodCard(food: any) {
    return (
        <Box className="flex  gap-10 ">
            <Card sx={{ maxWidth: 345 }}>

                <CardActionArea>
                    <CardMedia
                        sx={{ borderRadius: "20px", width: "350px", height: "200px" }}
                        component="img"
                        image={food.image}
                        alt="food item"
                    />
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <Stack>
                                <CardMedia
                                    sx={{ width: "382px", height: "200px" }}
                                    component="img"
                                    image={food.image}
                                />
                                <Typography style={styleDiscount}>{food.discount}%</Typography>
                            </Stack>

                            <CardContent>
                                <Typography style={styleName}>{food.name}</Typography>
                                <Stack mt={1} flexDirection={"row"}>
                                    <Typography style={styleDiscountedPrice}>
                                        {food.discount > 0
                                            ? `${food.price - (food.price * (food.discount / 100))}₮`
                                            : `${food.price}`
                                        }
                                    </Typography>
                                    <Typography sx={{ textDecorationLine: 'line-through' }}>{food.price}₮</Typography>
                                </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </CardActionArea>
            </Card>

        </Box>
    );
};