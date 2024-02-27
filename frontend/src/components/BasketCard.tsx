import { Box, Stack, Button, Typography } from "@mui/material";
import { Key, useContext, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { foodContext } from "./Context";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    height: '564px',
    bgcolor: '#FFF',
    boxShadow: 24,
    p: 4,
    borderRadius: '16px'
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
    color: '#18BA51'
};

const mediumWords = {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '27px',
};

const styleIngre = {
    backgroundColor: '#F6F6F6',
    padding: 10,
    color: '#767676',
    borderRadius: '10px'
};

const buttonStyle = {
    backgroundColor: '#18BA51',
    fontSize: 20,
    with: 'fit-content',
    borderRadius: '20px',
    color: '#FFF'
};

const countStyle = {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px'
};

const styleBasket = {
    backgroundColor: '#18BA51',
    with: 'fit-content',
    borderRadius: '20px',
    color: '#FFF',
    marginTop: 30
};

export function FoodModal({ displayBasket }: any) {
    const [count, setCount] = useState(0);
    const [foodData, setFoodData] = useContext(foodContext)
    const [openBasket, setOpenBasket] = useState<Boolean>(false)

    const decreaseCount = () => {
        if (count > 0) return setCount(count - 1)
    };

    const increaseCount = () => setCount(count + 1);

    return (
        <Box>
            <Box sx={style}>
                {foodData && (
                    foodData.map((el: { image: string | undefined; }, i: Key | null | undefined) => {
                        <Box key={i} width={'max-content'} display={'flex'} flexDirection={'row'} gap={5}>
                            <img
                                style={{ width: '500px', height: '500px', borderRadius: '10px' }}
                                src={el.image} alt="" />

                        </Box>
                    })
                )}
            </Box>
        </Box>
    );
};
