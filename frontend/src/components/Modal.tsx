'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import VisEyeIcon from '@mui/icons-material/VisibilityOutlined';
import OffEyeIcon from '@mui/icons-material/VisibilityOffTwoTone';

export default function Modal() {
    const [password, setPassword] = useState<String>('');
    const [isPassword, setIsPassword] = useState(false);
    const [email, setEmail] = useState<String>('');
    const [open, setOpen] = useState(true);

    const OpenModal = () => {
        setOpen(true)
    }

    const CloseModal = () => {
        setOpen(false)
    }

    const managePassword = () => {
        setIsPassword(!isPassword)
    }
    return (
        <Box>
            <Dialog open={open} onClose={CloseModal}>
                <DialogTitle sx={{ alignItems: "center", border: "0px solid transparent", justifyContent: "center", display: "flex", color: "#0D1118", fontWeight: "700", fontSize: "29px", marginBottom: "48px" }}>Нэвтрэх</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ display: "flex", flexDirection: "column", }} gap={"30px"}>

                        <Stack>
                            <div style={{ color: "#000" }}>Имэйл </div>
                            <TextField value={email} onChange={(e) => setEmail(e.target.value)} sx={{ width: "500px" }} id="filled-basic" placeholder='Имэйл хаягаа оруулна уу' variant="filled" />
                        </Stack>

                        <Stack spacing={2}>
                            <div style={{ color: "#000" }}>Нууц үг</div>
                            <TextField
                                type={isPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{ width: "500px", position: "relative" }}
                                id="filled-basic"
                                placeholder='Нууц үг'
                                variant="filled"
                            />
                            <Button onClick={managePassword} sx={{ position: "absolute", right: "20px", bottom: "270px" }}>
                                {isPassword ? <OffEyeIcon /> : <VisEyeIcon />}
                            </Button>
                            {/* ReCover password */}
                            <Stack sx={{ width: "500px", alignItems: "flex-end" }}>
                                <Button sx={{ fontSize: "14px", fontWeight: "400", color: "#3F4145" }}>Нууц үг сэргээх</Button>
                            </Stack>
                        </Stack>


                        <Stack sx={{ gap: "32px" }}>
                            <Button sx={{ background: '#EEEFF2', borderRadius: '4px', color: 'grey' }}>Нэвтрэх</Button>
                            <div style={{ width: "500px", justifyContent: "center", textAlign: "center" }}>Эсвэл</div>
                            <Button sx={{ color: "black" }}>Бүртгүүлэх</Button>
                        </Stack>

                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Box>
    )
}