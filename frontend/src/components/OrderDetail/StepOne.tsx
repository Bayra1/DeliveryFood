import { Stack, Typography } from "@mui/material";
import { orderContext } from "@/components/OrderContext";
import { useContext } from "react";
import CheckIcon from '@mui/icons-material/Check';
export default function StepOne({ allInfoForStepOne }: any) {
    console.log(allInfoForStepOne, "test");
    

    return (
        <Stack sx={{ display: 'flex', flexDirection: 'row', width: '432px', height: '100px', gap: '16px', padding: '16px 24px' }}>
            <Stack sx={{ width: '48px', height: '48px', borderRadius: '50%', bgcolor: '#18BA51', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFF' }}>
                <CheckIcon />
            </Stack>
            <Stack>
                <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#8B8E95', lineHeight: '16.71px' }}>Алхам 1</Typography>
                <Typography sx={{ fontWeight: 400, fontSize: '20px', color: '#000', lineHeight: '23.87px' }}>Хаягийн мэдээлэл оруулах</Typography>
                <Typography sx={{ fontWeight: 400, fontSize: '16px', color: '#18BA51', lineHeight: '19.09px' }}>Оруулсан and Хүлээгдэж байна</Typography>
            </Stack>
        </Stack>
    )
}