import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import BigFood from "./assets/Group 534.png";
import FoodSvg from "../components/Svg/FoodSvg";
import Deliveries from "./Deliveries";

export default function HomePage() {
    return (
        <Box>
            <Box sx={{ display: "flex" }} alignItems='center' flexDirection='column' bgcolor='#18BA51' justifyContent='center' height='788px'>
                <Box position='relative' justifyContent='space-between' alignItems='center' sx={{ display: "flex" }} width='1500px'>
                    <Stack position='absolute'>
                        <FoodSvg />
                    </Stack>
                    <Stack>
                        <Typography sx={{ fontWeight: 500 }} color='white' variant="h2">PineCone <br /> Food Delivery</Typography>
                        <Typography mb={2} mt={2} border={"1px solid white"}></Typography>
                        <Typography color='white' variant="h6">Horem ipsum dolor sit amet,</Typography>
                        <Typography color='white' variant="h6">consectetur adipiscing elit.</Typography>
                    </Stack>
                    <Stack>
                        <img className="w-[650px] h-p[650px]" src={BigFood.src} alt="" />
                    </Stack>
                </Box>
            </Box>
            <Deliveries />
        </Box>
    );
}
