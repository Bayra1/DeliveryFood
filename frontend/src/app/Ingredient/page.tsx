'use client'
import Navbar from "@/components/Navbar";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

export default function MenuCategory() {
    const filtersName = ['BreaksFast', 'Soup', 'MainCourse', 'Dessert'];
    const [selectedCategory, setSelectedCategory] = useState(filtersName[0])
    const [isActive, setIsActive] = useState(0)


    const handleColor = (index: number) => {
        setIsActive(index)
    }

    console.log(isActive,'this index')

    const handleFilterChange = (category : string) => {
        setSelectedCategory(category);
        // console.log(isChosenButton);
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

    const breakFastData = [
        {
            img: 'https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qi4Hce6GFKvwr2JWLWcs7c-IZVXb69fPg-tr9~NJ3C0NOBHNZI~0A9wEwsChG4lLJFUnZBq8FIX5KyJnQeGdJxeS4xRxPYDGvRbmRwGuXLFuycL9ePu2GZLs7~RuWcv5ztWntYY-p1VEjEGhPz8TEqO7PTcsNkg3s2HTlLmfcgDcu4p4tHif2g~d61F~40h0zGqTaN6OSgW63rYowpnPKO6fhmVIWBuRZjiDNAoPF7jZ~oeXObWvXoAMpfoOzu8ZMf~U3djy22Utg~fjp0RXQefsOIRQSf7ns0523dbTkYESDPokTJf~S-Ad8uuRi6rIqd1NhFHky-i4ARkMqGppWg__',
            name: 'Өглөөний хоол',
            price: 12900,
            discount: 10
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qi4Hce6GFKvwr2JWLWcs7c-IZVXb69fPg-tr9~NJ3C0NOBHNZI~0A9wEwsChG4lLJFUnZBq8FIX5KyJnQeGdJxeS4xRxPYDGvRbmRwGuXLFuycL9ePu2GZLs7~RuWcv5ztWntYY-p1VEjEGhPz8TEqO7PTcsNkg3s2HTlLmfcgDcu4p4tHif2g~d61F~40h0zGqTaN6OSgW63rYowpnPKO6fhmVIWBuRZjiDNAoPF7jZ~oeXObWvXoAMpfoOzu8ZMf~U3djy22Utg~fjp0RXQefsOIRQSf7ns0523dbTkYESDPokTJf~S-Ad8uuRi6rIqd1NhFHky-i4ARkMqGppWg__',
            name: 'Өглөөний хоол',
            price: 12900,
            discount: 10
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qi4Hce6GFKvwr2JWLWcs7c-IZVXb69fPg-tr9~NJ3C0NOBHNZI~0A9wEwsChG4lLJFUnZBq8FIX5KyJnQeGdJxeS4xRxPYDGvRbmRwGuXLFuycL9ePu2GZLs7~RuWcv5ztWntYY-p1VEjEGhPz8TEqO7PTcsNkg3s2HTlLmfcgDcu4p4tHif2g~d61F~40h0zGqTaN6OSgW63rYowpnPKO6fhmVIWBuRZjiDNAoPF7jZ~oeXObWvXoAMpfoOzu8ZMf~U3djy22Utg~fjp0RXQefsOIRQSf7ns0523dbTkYESDPokTJf~S-Ad8uuRi6rIqd1NhFHky-i4ARkMqGppWg__',
            name: 'Өглөөний хоол',
            price: 12900,
            discount: 10
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qi4Hce6GFKvwr2JWLWcs7c-IZVXb69fPg-tr9~NJ3C0NOBHNZI~0A9wEwsChG4lLJFUnZBq8FIX5KyJnQeGdJxeS4xRxPYDGvRbmRwGuXLFuycL9ePu2GZLs7~RuWcv5ztWntYY-p1VEjEGhPz8TEqO7PTcsNkg3s2HTlLmfcgDcu4p4tHif2g~d61F~40h0zGqTaN6OSgW63rYowpnPKO6fhmVIWBuRZjiDNAoPF7jZ~oeXObWvXoAMpfoOzu8ZMf~U3djy22Utg~fjp0RXQefsOIRQSf7ns0523dbTkYESDPokTJf~S-Ad8uuRi6rIqd1NhFHky-i4ARkMqGppWg__',
            name: 'Өглөөний хоол',
            price: 12900,
            discount: 10
        },
    ];

    const souptData = [
        {
            img: 'https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qi4Hce6GFKvwr2JWLWcs7c-IZVXb69fPg-tr9~NJ3C0NOBHNZI~0A9wEwsChG4lLJFUnZBq8FIX5KyJnQeGdJxeS4xRxPYDGvRbmRwGuXLFuycL9ePu2GZLs7~RuWcv5ztWntYY-p1VEjEGhPz8TEqO7PTcsNkg3s2HTlLmfcgDcu4p4tHif2g~d61F~40h0zGqTaN6OSgW63rYowpnPKO6fhmVIWBuRZjiDNAoPF7jZ~oeXObWvXoAMpfoOzu8ZMf~U3djy22Utg~fjp0RXQefsOIRQSf7ns0523dbTkYESDPokTJf~S-Ad8uuRi6rIqd1NhFHky-i4ARkMqGppWg__',
            name: 'Өглөөний хоол',
            price: 12900,
            discount: 10
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qi4Hce6GFKvwr2JWLWcs7c-IZVXb69fPg-tr9~NJ3C0NOBHNZI~0A9wEwsChG4lLJFUnZBq8FIX5KyJnQeGdJxeS4xRxPYDGvRbmRwGuXLFuycL9ePu2GZLs7~RuWcv5ztWntYY-p1VEjEGhPz8TEqO7PTcsNkg3s2HTlLmfcgDcu4p4tHif2g~d61F~40h0zGqTaN6OSgW63rYowpnPKO6fhmVIWBuRZjiDNAoPF7jZ~oeXObWvXoAMpfoOzu8ZMf~U3djy22Utg~fjp0RXQefsOIRQSf7ns0523dbTkYESDPokTJf~S-Ad8uuRi6rIqd1NhFHky-i4ARkMqGppWg__',
            name: 'Өглөөний хоол',
            price: 12900,
            discount: 10
        }
    ];

    const mainCourseData = [
        {
            img: 'https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qi4Hce6GFKvwr2JWLWcs7c-IZVXb69fPg-tr9~NJ3C0NOBHNZI~0A9wEwsChG4lLJFUnZBq8FIX5KyJnQeGdJxeS4xRxPYDGvRbmRwGuXLFuycL9ePu2GZLs7~RuWcv5ztWntYY-p1VEjEGhPz8TEqO7PTcsNkg3s2HTlLmfcgDcu4p4tHif2g~d61F~40h0zGqTaN6OSgW63rYowpnPKO6fhmVIWBuRZjiDNAoPF7jZ~oeXObWvXoAMpfoOzu8ZMf~U3djy22Utg~fjp0RXQefsOIRQSf7ns0523dbTkYESDPokTJf~S-Ad8uuRi6rIqd1NhFHky-i4ARkMqGppWg__',
            name: 'Өглөөний хоол',
            price: 12900,
            discount: 10
        }
    ];

    const dessertData = [
        {
            img: 'https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qi4Hce6GFKvwr2JWLWcs7c-IZVXb69fPg-tr9~NJ3C0NOBHNZI~0A9wEwsChG4lLJFUnZBq8FIX5KyJnQeGdJxeS4xRxPYDGvRbmRwGuXLFuycL9ePu2GZLs7~RuWcv5ztWntYY-p1VEjEGhPz8TEqO7PTcsNkg3s2HTlLmfcgDcu4p4tHif2g~d61F~40h0zGqTaN6OSgW63rYowpnPKO6fhmVIWBuRZjiDNAoPF7jZ~oeXObWvXoAMpfoOzu8ZMf~U3djy22Utg~fjp0RXQefsOIRQSf7ns0523dbTkYESDPokTJf~S-Ad8uuRi6rIqd1NhFHky-i4ARkMqGppWg__',
            name: 'Өглөөний хоол',
            price: 12900,
            discount: 10
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qi4Hce6GFKvwr2JWLWcs7c-IZVXb69fPg-tr9~NJ3C0NOBHNZI~0A9wEwsChG4lLJFUnZBq8FIX5KyJnQeGdJxeS4xRxPYDGvRbmRwGuXLFuycL9ePu2GZLs7~RuWcv5ztWntYY-p1VEjEGhPz8TEqO7PTcsNkg3s2HTlLmfcgDcu4p4tHif2g~d61F~40h0zGqTaN6OSgW63rYowpnPKO6fhmVIWBuRZjiDNAoPF7jZ~oeXObWvXoAMpfoOzu8ZMf~U3djy22Utg~fjp0RXQefsOIRQSf7ns0523dbTkYESDPokTJf~S-Ad8uuRi6rIqd1NhFHky-i4ARkMqGppWg__',
            name: 'Өглөөний хоол',
            price: 12900,
            discount: 10
        }
    ];

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


    function filterData(category: string) {

        switch (category) {
            case 'BreakFast':
                return breakFastData;
                break;
            case 'Soup':
                return souptData;
                break;
            case 'MainCourse':
                return mainCourseData;
                break;

            case 'Dessert':
                return dessertData;
                break;
            default:
                return breakFastData;
                break;
        }
    }

    return (
        <Box>
            <Navbar />
            <Stack mt={10} width={'100%'} justifyContent={'center'} alignItems={'center'}>

                <Box width={'67%'} sx={{ display: 'flex' }} justifyContent={'space-between'}>
                    {filtersName.map((element, index) => {
                        return (
                            <Button
                                style={{...buttonStyle, backgroundColor: index === isActive ? "#18BA51" : "white" }}
                                key={index}
                                onClick={() => {
                                    handleColor(index)
                                    handleFilterChange(element)
                                }}
                            >
                                {element}
                            </Button>
                        )
                    })}
                </Box>

                <Stack mt={10} sx={{ display: 'flex' }} flexDirection={'row'} justifyContent={'space-between'} gap={16}>
                    {filterData(selectedCategory).map((element, i) => (
                        <Card sx={{ width: '282px' }} key={i}>

                            <CardActionArea>
                                <img style={{ height: '186px', width: '100%' }} src={element.img} alt="" />
                                <CardContent>
                                    <Typography style={styleName}>
                                        {element.name}
                                    </Typography>
                                    <Stack flexDirection={'row'} gap={5}>
                                        <Typography color={'#18BA51'}>
                                            {element.price}₮
                                        </Typography>
                                        <Typography sx={styleDiscount} color="text.secondary">
                                            {element.discount}₮
                                        </Typography>
                                    </Stack>
                                </CardContent>

                            </CardActionArea>
                        </Card>
                    ))}
                </Stack>

            </Stack>
        </Box>
    )
}