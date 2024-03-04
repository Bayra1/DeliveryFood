import { Box, Stack, Typography } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createTypography";

const imgNameStyle: CSSProperties = {
    width: "229.67px",
    height: "72px",
    padding: "16px 24px",
    borderRadius: "0px, 0px, 1px, 0px",
    display: 'flex',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomWidth: '1px',
};

const userInfo: CSSProperties = {
    width: "140px",
    height: "72px",
    padding: "16px 24px",
    borderRadius: "0px, 0px, 1px, 0px",
    display: 'flex',
    flexDirection: 'column',
    borderStyle: 'solid',
    borderBottomWidth: '1px'
};

const paymentStyle: CSSProperties = {
    width: "229.67px",
    height: "72px",
    padding: "16px 24px",
    borderRadius: "0px, 0px, 1px, 0px",
    display: 'flex',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomWidth: '1px',
    justifyContent: 'center',
    alignItems: 'center',
};

const checkPaymentStyle = {
    width: '44px',
    height: '24px',
    borderRadius: '20px',
    backgroundColor: 'rgba(193, 230, 207, 1)',
    color: 'rgba(10, 78, 34, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "0px, 6px",
    display: 'flex'
};

const orderStyle: CSSProperties = {
    width: "229.67px",
    height: "72px",
    padding: "16px 24px",
    borderRadius: "0px, 0px, 1px, 0px",
    display: 'flex',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomWidth: '1px',
    justifyContent: 'center',
    alignItems: 'center',
};

const processStyle = {
    width: '77px',
    height: '24px',
    borderRadius: '20px',
    backgroundColor: 'rgba(253, 244, 182, 1)',
    color: 'rgba(105, 92, 8, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "0px, x6p",
    display: 'flex'
};

export default function AdminOrderTable({ orderUserData }: any) {
    const orderData = orderUserData.allOrders;
    console.log(orderData, "this is original ");

    const dataFood = orderData.flatMap((order: any) =>
        order.foods.map((food: any) => ({
            ...food,
            orderNumber: order.orderNumber,
        }))
    );
    // console.log(dataFood);


    return (
        <Box display={'flex'} flexDirection={'row'}>
            <Stack display={'flex'} gap={"8px"}>
                {/* OrderName */}
                {dataFood && dataFood.map((food: any, i: number) => (
                    <Stack style={imgNameStyle} key={i}>
                        <img style={{ width: "40px", height: "40px" }} src={food.image} alt="" />
                        <Stack alignItems={'flex-start'} justifyContent={'center'} ml={2} sx={{ display: 'flex', flexDirection: 'column', width: '133.67px', height: '36px' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '14px', lineHeight: "16px", color: 'rgba(18, 19, 22, 1)' }}>#{food.orderNumber}</Typography>
                            <Typography sx={{ fontWeight: 600, fontSize: '14px', lineHeight: "16px", color: "rgba(63, 65, 69, 1)" }}>{food.name}</Typography>
                        </Stack>
                    </Stack>
                ))}
                {/* User Inof */}
            </Stack>
            <Stack style={userInfo}>
                <Typography sx={{ fontWeight: 600, fontSize: '14px', lineHeight: '16px', color: 'rgba(18, 19, 22, 1)' }}>909090</Typography>
                <Typography sx={{ fontWeight: 400, fontSize: '14px', lineHeight: '20px', color: 'rgba(63, 65, 69, 1)' }}>Bosoo</Typography>
            </Stack>
            {/* Payment */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {orderData && orderData.map((order: any, i: number) => (
                    <Stack key={i} style={paymentStyle}>
                        <Stack sx={{ width: '137.67px' }}>
                            <Typography sx={{ fontWeight: 700, fontSize: '14px', lineHeight: '16px', color: 'rgba(18, 19, 22, 1)' }}>{order.totalPrice}₮</Typography>
                            <Typography sx={{ fontWeight: 700, fontSize: '14px', lineHeight: '16px', color: 'rgba(63, 65, 69, 1)' }}>2024/09/17 17:40</Typography>
                        </Stack>
                        <Typography style={checkPaymentStyle}>Paid</Typography>
                    </Stack>
                ))}
            </Box>
            {/* Address */}
            <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                {orderData && orderData.map((el: any, i: number) => (
                    <Stack key={i} style={orderStyle}>
                        <Typography>{el.Apartment}</Typography>
                        <Typography>{el.District}</Typography>
                        <Typography>{el.Khoroo}</Typography>
                    </Stack>
                ))}
            </Box>
            {/* Deliver State */}
            <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                {orderData && orderData.map((el: any, i: number) => (
                    <Stack key={i} style={orderStyle}>
                        <Typography style={processStyle}>{el.process}</Typography>
                    </Stack>
                ))}
            </Box>
        </Box>
    );
};
