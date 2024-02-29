import { Stack, Typography, Input } from "@mui/material";
export default function PhoneNumberOrder() {
    return (
        <Stack display={'flex'} flexDirection={'column'} gap={'16px'}>
            <Typography sx={{ fontWeight: 400, fontSize: '14px', color: 'black' }}>Утасны дугаар*</Typography>
            <Input sx={{ background: '#8B8E95', width: '432px', height: '48px', backgroundColor: '#ECEDF0', padding: '8px 16px', borderRadius: '4px' }} placeholder="Утасны дугаараа оруулна уу" />
        </Stack>
    )
}