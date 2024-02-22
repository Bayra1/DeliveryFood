'use client'
// SignUp Component
import * as React from 'react';
import { Stack, Box } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import axios from "axios";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const backEnd = "http://localhost:8001/user/signUp"

export default function SignUp() {
    const [name, setName] = useState<String>('')
    const [email, setEmail] = useState<String>('');
    const [phoneNumber, setPhoneNumber] = useState<Number>()
    const [password, setPassword] = useState<String>('');
    const [rePassword, setRePassword] = useState<String>('')
    const [showPassword, setShowPassword] = React.useState(false);
    const [showRePassword, setRehowPassword] = React.useState(false);
    const [error, setError] = useState<String>('')
    const [buttonClass, setButtonClass] = useState('inactive');
    const router = useRouter();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handShowRePassword = () => setRehowPassword((show) => (!show))

    const handleInputChange = (event: any) => {
        setName(event.target.value);
        setButtonClass(event.target.value !== '' ? 'active' : 'inactive');
    };

    const navigateDash = () => {
        router.push('/Home')
    }
    
    const addClients = async () => {
        try {
            if (name !== "" && email !== "" && password !== "" && rePassword !== "") {
                if (password == rePassword) {
                    const userData = await axios.post(backEnd, {
                        name,
                        email,
                        phoneNumber,
                        password
                    });
                    console.log('This is user data', userData);
                } else {
                    setError('Passwords cannot match')
                    setTimeout(() => {
                        setError('')
                    }, 2000)
                }
            } else {
                setError('All Forms should not be empty')
                console.log('can not register');
                setTimeout(() => {
                    setError('')
                }, 2000);
            }

        } catch (error) {
            console.log('Failed to create a client', error);
        }
    };


    return (
        <Stack>
            <Navbar />
            <Box justifyContent="center" alignItems="center" sx={{ display: "flex" }}>
                <Stack sx={{ display: "flex", flexDirection: "column", backgroundColor: "orane", }} gap={"30px"} mt={10}>
                    <Box sx={{ alignItems: "center", border: "0px solid transparent", justifyContent: "center", display: "flex", color: "#0D1118", fontWeight: "700", fontSize: "29px", marginBottom: "48px" }}>Бүртгүүлэх</Box>

                    <Stack border="none">
                        <Typography variant="body1" gutterBottom>Нэр</Typography>
                        <TextField value={name} onChange={handleInputChange} sx={{ width: "500px" }} id="filled-basic" placeholder='Нэрээ оруулна уу' variant="filled" />
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
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Stack>

                    <Stack mb={1}>
                        <Typography variant="body1" gutterBottom>Нууц үг давтах</Typography>
                        <FormControl fullWidth variant="standard">
                            <Input
                                value={rePassword}
                                onChange={(e) => setRePassword(e.target.value)}
                                placeholder="Нууц үг"
                                id="standard-adornment-password"
                                type={showRePassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handShowRePassword}
                                        >
                                            {showRePassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Typography color='red' variant="h6">{error}</Typography>
                    </Stack>

                    <Stack>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Үйлчилгээний нөхцөл зөвшөөрөх" />
                        </FormGroup>
                    </Stack>

                    <Stack sx={{ gap: "32px" }}>
                        <Button className={buttonClass} onClick={addClients} sx={{ borderColor: "#18BA51", borderStyle: "solid", borderWidth: "2px" }} variant="outlined">Бүртгүүлэх</Button>
                    </Stack>

                </Stack>
            </Box>
            <Footer />
        </Stack>
    )
}