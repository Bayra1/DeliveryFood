import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import BigFood from "./assets/Group 534.png";
import FoodSvg from "../components/Svg/FoodSvg";
import Deliveries from "./Deliveries";
import Footer from "./Footer";
import SaleCards from "./Sale";

export default function HomePage() {
    return (
        <Box width={"100%"}>
            <Box sx={{ display: "flex" }} alignItems='center' flexDirection='column' bgcolor='#18BA51' justifyContent='center' height='788px'>
                <Box justifyContent='space-between' alignItems='center' sx={{ display: "flex" }} width='65%'>                    
                    <Stack>
                        <Typography sx={{ fontWeight: 500 }} color='white' variant="h4">PineCone <br /> Food Delivery</Typography>
                        <Typography mb={2} mt={2} border={"1px solid white"}></Typography>
                        <Typography color='white' variant="h6">Horem ipsum dolor sit amet,</Typography>
                        <Typography color='white' variant="h6">consectetur adipiscing elit.</Typography>
                    </Stack>
                    <Stack sx={{width:"450xp", height:"450xp"}}>
                        <img className="w-[450px] h-p[450px]" src={BigFood.src} alt="" />
                    </Stack>
                </Box>
            </Box>
            <Deliveries />
            <SaleCards/>
            <Footer/>
        </Box>
    );
}
