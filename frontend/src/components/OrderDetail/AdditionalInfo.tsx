import { Stack, Typography, Input } from "@mui/material";
export default function AdditionalInfo() {
    return (
        <Stack display={'flex'} flexDirection={'column'} gap={'16px'}>
            <Typography sx={{ fontWeight: 400, fontSize: '14px', color: 'black' }}>Нэмэлт мэдээлэл</Typography>
            <Input sx={{ background: '#8B8E95', width: '432px', height: '112px', backgroundColor: '#ECEDF0' }} placeholder="Орц, давхар, орцны код ..." />
        </Stack>
    )
}