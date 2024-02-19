import { Button, Stack } from "@mui/material";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Title from "./Title";
export default function FoodCrud() {
    const list = ['BreakFast', 'Soup', 'Main Course', 'Desserts'];
    return (
        <Box width={'79%'} display={'flex'} justifyContent={'center'} alignContent={'center'}>
            <Box sx={{ width: '100%',  display: 'flex' }}>
                <Stack sx={{ backgroundColor: 'cyan' }} width={'30%'}>
                    <Title title={'Food Menu'} />
                    {
                        list.map((el, i) => {
                            return (
                                <Button key={i}>
                                    {el}
                                </Button>
                            )
                        })
                    }
                </Stack>

                <Stack sx={{ backgroundColor: 'green' }} width={'70%'}>

                </Stack>
            </Box>
        </Box>
    )
}