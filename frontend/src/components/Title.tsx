import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ExtensionIcon from '@mui/icons-material/Extension';
export default function Title(props: { title: String }) {
    return (
        <Box flexDirection={'row'} sx={{display:'flex'}}>
            <Stack color={'#18BA51'}>
                <ExtensionIcon />
            </Stack>
            <Typography variant="h5" color={'black'} fontWeight={'700'}>
                {props.title}
            </Typography>
        </Box>
    );
}
