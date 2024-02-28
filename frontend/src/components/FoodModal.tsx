import { Box, Stack, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
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

export function FoodModal({ foodCardId, food, CloseModal }: any) {
    const [count, setCount] = useState(0);
    const { toBasket } = useContext(foodContext)
    const selectedFood = food.allFoods.find((el: { _id: any; }) => el._id === foodCardId);

    const decreaseCount = () => {
        if (count > 0) return setCount(count - 1)
    };

    const increaseCount = () => setCount(count + 1);

    const navigateToBasket = () => {
        const foodValues = {
            ...selectedFood,
            count    
        };
        toBasket(foodValues);
        console.log(foodValues, 'foodVlues');
    };


    return (
        <Box>
            <Box sx={style}>
                {selectedFood && (
                    <Box width={'max-content'} display={'flex'} flexDirection={'row'} gap={5}>
                        <img style={{ width: '500px', height: '500px', borderRadius: '10px' }} src={selectedFood.image} alt="" />
                        <Stack mt={3}>
                            <Button onClick={CloseModal} sx={{ color: 'black', alignItems: 'flex-end', display: 'flex', flexDirection: 'column-reverse', }}>
                                <CloseIcon />
                            </Button>
                            <Stack width={'384px'} display={'flex'} gap={2}>
                                <Typography style={bigWords}>{selectedFood.name}</Typography>
                                <Typography style={stylePrice}>{selectedFood.price}₮</Typography>
                                <Typography style={mediumWords}>Орц</Typography>
                                <Typography width={'100%'} style={styleIngre}>{selectedFood.ingredient}</Typography>
                                <Typography width={'100%'} style={mediumWords}>Too</Typography>
                                <Stack mt={2} alignItems={'center'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                                    <Button style={buttonStyle} onClick={decreaseCount}>-</Button>
                                    <Typography style={countStyle}>{count}</Typography>
                                    <Button style={buttonStyle} onClick={increaseCount}>+</Button>
                                </Stack>
                                <Button onClick={navigateToBasket} style={styleBasket}>Сагслах</Button>
                            </Stack>
                        </Stack>
                    </Box>
                )}
            </Box>
        </Box>
    );
};
function JSONparse(foodValues: any): any {
    throw new Error("Function not implemented.");
}

