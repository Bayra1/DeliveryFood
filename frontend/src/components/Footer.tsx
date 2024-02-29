'use client'
import { Box, Stack, Typography } from "@mui/material";
import PineConeLogo from "../components/icons/PIneCone";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import BackPicture from "../components/icons/bckImg";
function Footer() {
    const info = ['Нүүр', "Холбоо барих", "Хоолны цэс", "Үйлчилгээний нөхцөл", "Хүргэлтийн бүс", "нууцлалын бодлого"]
    const rightValid = ["© 2024 Pinecone Foods LLC", "Зохиогчийн эрх хуулиар хамгаалагдсан."]
    return (
        <Box width={'100%'} sx={{ bgcolor: '#18BA51', height: '545px', display: 'flex', alignItems: "center", justifyContent: "center", position: 'relative', marginTop: '100px', backgroundImage: '' }}>
            <Stack height={'332px'} width={'80%'} direction={"row"} flexDirection={"column"} gap={'40px'} >

                {/* <BackPicture /> */}
                <Stack direction={"row"} gap={1} alignItems={"center"} justifyContent={"center"}>
                    <PineConeLogo />
                    <Typography sx={{ color: 'white' }}>Food Delivery</Typography>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    {info.map((el) => (
                        <Typography color="white" key={el}>{el}</Typography>
                    ))}
                </Stack>
                <Stack direction={"row"} gap={'18px'} justifyContent={"center"}>
                    <FacebookOutlinedIcon sx={{ color: 'white', height: '46px', width: '40px' }} />
                    <InstagramIcon sx={{ color: 'white', height: '46px', width: '35px' }} />
                    <TwitterIcon sx={{ color: 'white', height: '46px', width: '40px' }} />
                </Stack>
                <Stack border={'0.5px solid white'}></Stack>
                <Stack direction={"row"} gap={1} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
                    {
                        rightValid.map((element) => (
                            <Typography color="white" key={element}>{element}</Typography>
                        ))
                    }
                </Stack>
            </Stack>
        </Box>
    )
}
export default Footer;