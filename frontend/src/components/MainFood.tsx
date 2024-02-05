import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Title from './Title';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Bean from "./assets/Bean.avif";
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

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
    width: '65%',
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


export default function MainFood() {
    const data = [
        {
            img: Bean,
            name: 'BreakFast',
            price: 12900,
            discount: 10
        },
        {
            img: Bean,
            name: 'BreakFast',
            price: 12900,
            discount: 10
        },
        {
            img: Bean,
            name: 'BreakFast',
            price: 12900,
            discount: 10
        },
        {
            img: Bean,
            name: 'BreakFast',
            price: 12900,
            discount: 10
        },

    ]
    return (
        <Box sx={container}>
            <Stack sx={innerContainer}>

                <Stack sx={disCategory}>
                    <Title title={'Үндсэн хоол'} />
                    <Stack style={buttonClass}>
                        <Button sx={{ color: '#18BA51' }}>
                            Бүгдийг харах
                        </Button>
                        <ArrowForwardIosIcon />
                    </Stack>
                </Stack>

                <Stack gap={5} justifyContent={'space-between'} sx={{ display: 'flex', flexDirection: 'row' }}>
                    {
                        data.map((element, i) => {
                            return (

                                <Card sx={{ width: '350px', height: 'fit-content' }} key={i}>
                                    <CardActionArea>
                                        <img style={{ height: '186px', width: '100%' }} src={element.img.src} alt="" />
                                        <CardContent>
                                            <Typography style={styleName}>
                                                {element.name}
                                            </Typography>

                                            <Stack flexDirection={'row'} gap={5}>
                                                <Typography style={stylePrice}>
                                                    {element.price}₮
                                                </Typography>
                                                <Typography sx={styleDiscount} color="text.secondary">
                                                    {element.discount}₮
                                                </Typography>
                                            </Stack>

                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            )
                        })
                    }
                </Stack>

            </Stack>
        </Box>
    );
}