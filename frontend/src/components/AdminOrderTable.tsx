import { Box, Stack, Typography } from "@mui/material";
const imgNameStyle = {
    width: "229.67px",
    height: "72px",
    padding: "16px 24px",
    borderRadious: "0px, 0px, 1px, 0px",
    // borderStyle:"solid",
    // borderWidth:"1px"
}

export default function AdminOrderTable({ orderUserData }: any) {
    const orderData = orderUserData.allOrders
    console.log(orderData);
    
    const dataFood = orderUserData.allOrders.flatMap((el: any) => el.foods);
    // console.log(dataFood);

    return (
        <Box>
            <Stack display={'flex'} gap={"8px"}>
                {dataFood && dataFood.map((food: any, i: number) => (
                    <Stack style={imgNameStyle} key={i}>
                        <img style={{ width: "40px", height: "40px" }} src={food.image} alt="" />
                        <Stack>
                            <Typography>{orderData.map((el) => el.orderNumber)}</Typography>
                            <Typography>{food.name}</Typography>
                        </Stack>
                    </Stack>
                ))}
            </Stack>
        </Box>
    );
};



// width: Fill (229.67px)
// height: Hug (72px)
// padding: 16px, 24px, 16px, 24px
// border: 0px, 0px, 1px, 0px
// gap: 8px
