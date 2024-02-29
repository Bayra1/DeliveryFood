import { Stack, Typography, Input } from "@mui/material";
import { useState } from "react";
import StepOne from "./StepOne";
export default function PhoneNumberOrder() {
    const [phoneNumber, setPhoneNumber] = useState("");

    const handNumber = (event: any) => {
        const valueofNumber = event.target.value;
        setPhoneNumber(valueofNumber)
    }
    return (
        <Stack display={'flex'} flexDirection={'column'} gap={'16px'}>
            <Typography sx={{ fontWeight: 400, fontSize: '14px', color: 'black' }}>Утасны дугаар*</Typography>
            <Input value={phoneNumber} onChange={handNumber} sx={{ background: '#8B8E95', width: '432px', height: '48px', backgroundColor: '#ECEDF0', padding: '8px 16px', borderRadius: '4px' }} placeholder="Утасны дугаараа оруулна уу" />
        </Stack>
    )
}