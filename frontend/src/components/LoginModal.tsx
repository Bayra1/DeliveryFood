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
import axios from 'axios';
import { useRouter } from 'next/navigation';
import jwt, { JwtPayload } from 'jsonwebtoken'

const backEnd = "http://localhost:8001/user/login"

export default function Modal() {
    const [password, setPassword] = useState<String>('');
    const [email, setEmail] = useState<String>('');
    const [error, setError] = useState<String>('');
    const [isPassword, setIsPassword] = useState(false);
    const [open, setOpen] = useState(true);
    const [buttonClass, setButtonClass] = useState('inactive');
    const router = useRouter()

    const CloseModal = () => {
        setOpen(false)
    };

    const managePassword = () => {
        setIsPassword(!isPassword)
    };

    const manageInputChange = (event: any) => {
        setEmail(event.target.value);
        setButtonClass(event.target.value !== '' ? 'active' : 'inactive')
    };

    const navigateSingUp = () => {
        router.push('/SignUp')
    };

    const checkingUser = async () => {
        try {
            const response = await axios.post(backEnd, {
                email,
                password,
            });
            
            const jwtToken = response.data.token;
            const decodedToken = jwt.decode(jwtToken) as JwtPayload;
            
            if (decodedToken && decodedToken.desiredUser) {
                const existingEmail = decodedToken.desiredUser.email;
                // const existingPassword = decodedToken.desiredUser.password;
            
                if (existingEmail === email) {
                    router.push(`/?email=${existingEmail}`);
                } else {
                    setError('Invalid Inputs');
                    setTimeout(() => {
                        setError('');
                    }, 2000);
                }
            }
                   
        } catch (error) {
            setError('PassWords or Email are invalid');
            console.error(error);
            setTimeout(() => {
                setError('');
            }, 2000);
        }
    };

    return (
        <Box>
            <Dialog open={open} onClose={CloseModal}>
                <DialogTitle sx={{ alignItems: "center", border: "0px solid transparent", justifyContent: "center", display: "flex", color: "#0D1118", fontWeight: "700", fontSize: "29px", marginBottom: "48px" }}>Нэвтрэх</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ display: "flex", flexDirection: "column", }} gap={"30px"}>

                        <Stack>
                            <div style={{ color: "#000" }}>Имэйл </div>
                            <TextField value={email} onChange={manageInputChange} sx={{ width: "500px" }} id="filled-basic" placeholder='Имэйл хаягаа оруулна уу' variant="filled" />
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
                            <Button onClick={managePassword} sx={{ position: "absolute", right: "20px", bottom: "310px" }}>
                                {isPassword ? <OffEyeIcon /> : <VisEyeIcon />}
                            </Button>
                            {/* ReCover password */}
                            <Stack sx={{ width: "500px", alignItems: "flex-end" }}>
                                <Button sx={{ fontSize: "14px", fontWeight: "400", color: "#3F4145" }}>Нууц үг сэргээх</Button>
                            </Stack>
                        </Stack>

                        <Stack sx={{ gap: "32px" }}>
                            <Stack width={"100%"} alignItems={"center"} color={'red'}>{error}</Stack>
                            <Button
                                onClick={checkingUser}
                                className={buttonClass}
                                sx={{ background: '#EEEFF2', borderRadius: '4px', color: 'grey' }}>Нэвтрэх</Button>
                            <div style={{ width: "500px", justifyContent: "center", textAlign: "center" }}>Эсвэл</div>
                            <Button onClick={navigateSingUp} sx={{ color: "black" }}>Бүртгүүлэх</Button>
                        </Stack>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Box>
    )
};