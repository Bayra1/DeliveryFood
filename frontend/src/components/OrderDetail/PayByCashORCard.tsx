import { Stack, Typography, Checkbox } from "@mui/material";
export default function PayByCashOrCard() {
    return (

        <Stack display={'flex'} flexDirection={'column'} gap={'16px'}>
            <Typography sx={{ fontWeight: 400, fontSize: '14px', color: 'black' }}>Төлбөр төлөх</Typography>

            <Stack display={'flex'} flexDirection={'row'}>
                <Stack width={'175px'} height={'24px'} display={'flex'} flexDirection={'row'} gap={'8px'}>
                    <Checkbox sx={{ color: 'black' }} />
                    <Typography sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '19.09px', color: '#8B8E95' }}>Бэлнээр</Typography>
                </Stack>
                <Stack width={'175px'} height={'24px'} display={'flex'} flexDirection={'row'} gap={'8px'}>
                    <Checkbox sx={{ color: 'black' }} />
                    <Typography sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '19.09px', color: '#8B8E95' }}>Картаар</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}