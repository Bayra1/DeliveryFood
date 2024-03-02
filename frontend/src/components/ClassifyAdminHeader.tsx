import { Stack, Box, Typography } from "@mui/material";
const orderStyle = {
    width: "229.67px",
    height: "44px",
    padding: "12px 24px",
    border: "0px, 0px, 1px, 0px"
};

const buyerStle = {
    width: "140px",
    height: "44px",
    padding: "12px 24px",
    border: "0px, 0px, 1px, 0px"
};

const paymentStyle = {
    width: "229.67px",
    height: "44px",
    padding: "12px 24px",
    border: "0px, 0px, 1px, 0px"
};

const addressStyle = {
    width: "229.67px",
    height: "44px",
    padding: "12px 24px",
    border: "0px, 0px, 1px, 0px"
};

const deliverStyle = {
    width: "127px",
    height: "44px",
    padding: "12px 24px",
    border: "0px, 0px, 1px, 0px"
};

const emptyStyle = {
    width: "68px",
    height: "44px",
    padding: "12px 24px",
    border: "0px, 0px, 1px, 0px"
};

export default function ClassifyAdminHeader() {
    return (
        <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Stack display={'flex'} flexDirection={'row'}>
                <Typography style={orderStyle} sx={{ bgcolor: '#D6D8DB', fontWeight: 600, fontSize: '12px', lineHeight: '16px', color: '#3F4145' }}>Order Name</Typography>
                <Typography style={buyerStle} sx={{ bgcolor: '#D6D8DB', fontWeight: 600, fontSize: '12px', lineHeight: '16px', color: '#3F4145' }}>Buyer Info</Typography>
                <Typography style={paymentStyle} sx={{ bgcolor: '#D6D8DB', fontWeight: 600, fontSize: '12px', lineHeight: '16px', color: '#3F4145' }}>Payment</Typography>
                <Typography style={addressStyle} sx={{ bgcolor: '#D6D8DB', fontWeight: 600, fontSize: '12px', lineHeight: '16px', color: '#3F4145' }}>Address</Typography>
                <Typography style={deliverStyle} sx={{ bgcolor: '#D6D8DB', fontWeight: 600, fontSize: '12px', lineHeight: '16px', color: '#3F4145' }}>Deliver State</Typography>
                <Typography style={emptyStyle} sx={{ bgcolor: '#D6D8DB', fontWeight: 600, fontSize: '12px', lineHeight: '16px', color: '#3F4145' }}></Typography>
            </Stack>
        </Box>
    )
};