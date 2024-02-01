import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import BookIcon from '@mui/icons-material/Book';
import { Typography } from "@mui/material";
export default function Deliveries() {
    return (
        <Box>
            <Box sx={{bgcolor:"#D6D8DB"}} width='300px'>
                <Stack>
                    <BookIcon/>
                    <Typography color='black' fontWeight={700}>Хүргэлтийн төлөв хянах</Typography>
                    <Typography>Шуурхай хүргэлт</Typography>
                </Stack>
            </Box>
        </Box>
    )
}