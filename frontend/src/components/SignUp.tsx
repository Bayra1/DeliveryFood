// SignUp Component
import { Stack, Box } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import axios from "axios";

const backEnd = "http://localhost:8000/user/signUp"

export default function SignUp() {
    const [name, setName] = useState<String>('')
    const [email, setEmail] = useState<String>('');
    const [phoneNumber, setPhoneNumber] = useState<Number>()
    const [password, setPassword] = useState<String>('');
    const [rePassword, setRePassword] = useState<String>('')
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    const addClients = async () => {
        try {
            if (password !== rePassword) {
                console.log('Passwords do not match');
                return;
            }

            const userData = await axios.post(backEnd, {
                name,
                email,
                phoneNumber,
                password
            });

            console.log('This is user data', userData);
        } catch (error) {
            console.log('Failed to create a client', error);
        }
    };


    return (
        <Stack justifyContent="center" alignItems="center" sx={{ display: "flex" }}>
            <Stack sx={{ display: "flex", flexDirection: "column", backgroundColor: "orane", }} gap={"30px"}>
                <Box sx={{ alignItems: "center", border: "0px solid transparent", justifyContent: "center", display: "flex", color: "#0D1118", fontWeight: "700", fontSize: "29px", marginBottom: "48px" }}>Бүртгүүлэх</Box>

                <Stack border="none">
                    <Typography variant="body1" gutterBottom>Нэр</Typography>
                    <TextField value={name} onChange={(e) => setName(e.target.value)} sx={{ width: "500px" }} id="filled-basic" placeholder='Нэрээ оруулна уу' variant="filled" />
                </Stack>

                <Stack>
                    <Typography variant="body1" gutterBottom>Имэйл</Typography>
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} sx={{ width: "500px" }} id="filled-basic" placeholder='Имэйл хаягаа оруулна уу' variant="filled" />
                </Stack>

                <Stack>
                    <Typography variant="body1" gutterBottom>PhoneNumber</Typography>
                    <TextField
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(Number(e.target.value))}
                        sx={{ width: "500px" }}
                        id="filled-basic"
                        placeholder='Please Type Your Phone Number'
                        variant="filled"
                    />
                </Stack>


                <Stack>
                    <Typography variant="body1" gutterBottom>Нууц үг</Typography>
                    <FormControl fullWidth variant="standard">
                        <Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Нууц үг"
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Stack>

                <Stack mb={10}>
                    <Typography variant="body1" gutterBottom>Нууц үг давтах</Typography>
                    <FormControl fullWidth variant="standard">
                        <Input
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                            placeholder="Нууц үг"
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Stack>


                <Stack sx={{ gap: "32px" }}>
                    <Button sx={{ background: '#EEEFF2', borderRadius: '4px', color: 'grey' }}>Нэвтрэх</Button>
                    <div style={{ width: "500px", justifyContent: "center", textAlign: "center" }}>Эсвэл</div>
                    <Button onClick={addClients} sx={{ borderColor: "#18BA51", borderStyle: "solid", borderWidth: "2px" }} variant="outlined">Бүртгүүлэх</Button>

                </Stack>

            </Stack>
        </Stack>
    )
}