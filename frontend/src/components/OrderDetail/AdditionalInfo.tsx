import { Stack, Typography, Input } from "@mui/material";
import { useState } from "react";
import StepOne from "./StepOne";

export default function AdditionalInfo() {
    const [additionalInfo, setAdditionalInfo] = useState("");

    const handleChangeAdditionalInfo = (e: any) => {
        const valueAddInfo = e.target.value;
        setAdditionalInfo(valueAddInfo);
    };

    return (
        <Stack display={'flex'} flexDirection={'column'} gap={'16px'}>
            <Typography sx={{ fontWeight: 400, fontSize: '14px', color: 'black' }}>Нэмэлт мэдээлэл</Typography>
            <Input value={additionalInfo} onChange={handleChangeAdditionalInfo} sx={{ background: '#8B8E95', width: '432px', height: '112px', backgroundColor: '#ECEDF0' }} placeholder="Орц, давхар, орцны код ..." />
        </Stack>
    );
}
