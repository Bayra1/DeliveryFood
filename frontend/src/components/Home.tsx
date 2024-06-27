import { Typography } from "@mui/material";
import { GiveFoodData } from "./Context";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import BigFood from "./assets/Group 534.png";
import Deliveries from "./Deliveries";
import Footer from "./Footer";
import MainFood from "./MainFood";
import SaleFoods from "./SaleFoods";
import { BasketCard } from "./BasketCardModal";

export default function HomePage() {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box
        sx={{
          display: "flex",
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/abab/8928/c4c79b15138c71b44dc8c2202844dd61?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VTsdD-i2y132X5eGVs7agHzMVkLzUXPpknSaDo0IT4z9q5ku2SpC47LqOgYfq~mnQS5TIkzTMxFYFetrAZW0pq0gbCqYeofXzsgMEceW2tus8QFbY2IOWlZm8gUNKWiuBNZTcx3W1kYyoXwv9pZs9yfcIPSi7lSwEkE1OS8ood8gn~~0W2NYAa97jzUEsLW3ZYT0eToWnberOhVASmtV2AXhbWSAs0wGjswGEi2Qcp7YZuxBTbsfPWNjlizrIQDbLtJZ2u2bx9CwtsljoLlLByKIBqgULAiNlO~cZwdNxdlkb5wcY3UCF~pWDVcwCAhK2S-rvRqvNXB2u0uOEkYGog__')",
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "1200px",
          height: "500px",
        }}
        alignItems="center"
        flexDirection="column"
        bgcolor="#18BA51"
        justifyContent="center"
        height="788px"
      >
        <Box
          justifyContent="space-between"
          width={"80%"}
          alignItems="center"
          sx={{
            display: "flex",
            // Prevents the image from repeating
          }}
        >
          <Stack>
            <Typography sx={{ fontWeight: 500 }} color="white" variant="h4">
              PineCone <br /> Food Delivery
            </Typography>
            <Typography mb={2} mt={2} border={"1px solid white"}></Typography>
            <Typography color="white" variant="h6">
              Horem ipsum dolor sit amet,
            </Typography>
            <Typography color="white" variant="h6">
              consectetur adipiscing elit.
            </Typography>
          </Stack>
          <Stack sx={{ width: "450px", height: "450px" }}>
            <img className="w-[450px] h-p[450px]" src={BigFood.src} alt="" />
          </Stack>
        </Box>
      </Box>
      <Deliveries />
      <SaleFoods />
      <MainFood />
      <Footer />
      {/* <BasketCard/> */}
    </Box>
  );
}
