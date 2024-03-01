import { Box, Stack, Typography } from "@mui/material";
import  Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ViewLast() {
    return (
        <Box>
            <Navbar />

            <Stack boxShadow={'0px 0px 20px 0px rgba(0, 0, 0, 0.05)'} bgcolor={'rgba(255, 255, 255, 1)'} width={'fit-content'} height={'fit-content'} padding={'24px'} borderRadius={'16px'} display={'flex'} flexDirection={'column'}>
                <Typography sx={{fontWeight:400, fontSize:"20px", lineHeight:"23.87px", color:"#000", fontFamily:'SF-PRO'}}>Захиалгын түүх</Typography>
            </Stack>

            <Footer />
        </Box>
    )
}