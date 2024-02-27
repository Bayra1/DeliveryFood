import { Box, Stack } from "@mui/material";
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    height: '564px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const bigWords = {
    fontWeight: 600,
    fontSize: '18px',
}


export function OrderDetail() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    {/* inner information */}
                    <Box display={'flex'} flexDirection={'row'} gap={5}>
                        <img style={{ width: '500px', height: '500px' }} src='https://media.istockphoto.com/id/1432995176/photo/traditional-buryad-buuz-making-procces-steamed-dumpling-filled-with-meat.jpg?s=2048x2048&w=is&k=20&c=72nTJBX8JXKdh-Fm8y2Zd_cgE-mB-ZYFx9bgBgfkM70=' alt="" />

                        <Stack width={'384px'} display={'flex'} gap={2}>

                            <Typography style={bigWords}>Main Pizza</Typography>
                            <Typography>34800$</Typography>
                            <Typography style={bigWords}>Орц</Typography>
                            <Stack>

                            </Stack>
                        </Stack>
                    </Box>

                </Box>
            </Modal>
        </Box>
    );
};