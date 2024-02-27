import { Box, Stack, Button, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    height: '564px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

const bigWords = {
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '33.41px'
};

const stylePrice = {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '27px',
    color:'#18BA51'
};

const mediumWords = {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '27px',
};

const styleIngre = {
    backgroundColor:'#F6F6F6',  
    padding:10,
    color:'#767676',
    borderRadius:'10px'
}



export function FoodModal({ foodCardId, food, CloseModal }: any) {
    const selectIdFood = food.allFoods.find((el: { _id: any; }) => el._id === foodCardId);

    return (
        <Box>
            <Box sx={style}>
                {selectIdFood && (
                    <Box display={'flex'} flexDirection={'row'} gap={5}>
                        <img style={{ width: '500px', height: '500px' }} src={selectIdFood.image} alt="" />
                        <Stack width={'fit-content'}>
                            <Button onClick={CloseModal} sx={{ color: 'black', alignItems: 'flex-end', }}>
                                <CloseIcon />
                            </Button>
                            <Stack width={'384px'} display={'flex'} gap={2}>
                                <Typography style={bigWords}>{selectIdFood.name}</Typography>
                                <Typography style={stylePrice}>{selectIdFood.price}₮</Typography>
                                <Typography style={mediumWords}>Орц</Typography>
                                <Typography style={styleIngre}>{selectIdFood.ingredient}</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                )}
            </Box>
        </Box>
    );
};
