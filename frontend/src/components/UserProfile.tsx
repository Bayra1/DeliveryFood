'use client'
import * as React from 'react';
import { Stack, Box, Typography, Button } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EditIcon from '@mui/icons-material/Edit';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';

const editStyle: React.CSSProperties = {
    position: 'absolute',
    width: 35,
    height: 35,
    borderStyle: 'solid',
    backgroundColor: '#fff',
    borderWidth: '2px',
    borderColor: '#D6D8DB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    margin: '85px 85px'
};

const profileStyle: React.CSSProperties = {
    width: 48,
    height: 48,
    borderRadius: '50%',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    borderWidth: '1px',
    borderColor: '#D6D8DB',
    display: 'flex',
    alignItems: 'center',
    color: 'black',
    justifyContent: 'center',
}

export default function SignUp() {
    return (
        <Stack>
            <Navbar />
            <Box justifyContent="center" alignItems="center" sx={{ display: "flex" }}>
                <Stack sx={{ display: "flex", flexDirection: "column", backgroundColor: "orane", alignItems: 'center', justifyContent: 'center' }} gap={"30px"} mt={10}>
                    <Stack>
                        <img
                            style={{ width: '120px', height: '120px', borderRadius: '50%', position: 'relative' }}
                            src="https://s3-alpha-sig.figma.com/img/631c/b511/384755363304d9f32de12bfe2335873c?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pHoDw5fST6C6VMACk7mDzFbd90LuPe1X3-9-fB6KeaGyq0j3opYAe6mzszTdPF64D0vJFek291zlaNLzomA8Hfrtok6Y7Gm62RvmQgQ8Jr8vFl~imcc94OdPL5JybF52TAlZvpILQq5DfqyZYEuAMH1ihhEMBoCBbUmLOkHppkJbwun1ecHrtd1jDsskpqTsqV2~WyhhZXjfj08TYSDm5~HS8MRPV7kebzHc2w48FjEvC1YgkxQXbfhOXYH6iAZKt02BZlqMYYAskZU~l~6UlE6FPpL-plyrj5Ko~8l-Z1VspLHXWm1IEaX2GjQHH2m5rP6pM6BuI-WFQ1RsYbpnBA__" alt="" />
                        <Stack style={editStyle} color={'#18BA51'}>
                            <EditIcon />
                        </Stack>
                    </Stack>

                    <List                
                        sx={{ width: '392px', borderRadius: '10px', display:'flex', flexDirection:'column', gap:3 }}
                        aria-label="contacts"
                    >
                        <ListItem  sx={{padding:1, borderRadius:'10px', bgcolor:'#F6F6F6'}} disablePadding>
                            
                                <ListItemIcon style={profileStyle}>
                                    <PersonOutlineIcon />
                                </ListItemIcon>

                                <Stack flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'space-between'} width={'100%'} ml={2}>
                                    <Stack>
                                        <Typography color={'#888A99'}>Таны нэр</Typography>
                                        <Typography>UgTahBayar</Typography>
                                    </Stack>
                                    <Button>
                                        <EditIcon sx={{ color: '#18BA51' }} />
                                    </Button>
                                </Stack>
                            
                        </ListItem>

                        <ListItem sx={{padding:1, borderRadius:'10px', bgcolor:'#F6F6F6'}} disablePadding>
                            
                                <ListItemIcon style={profileStyle}>
                                    <LocalPhoneIcon />
                                </ListItemIcon>

                                <Stack flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'space-between'} width={'100%'} ml={2}>
                                    <Stack>
                                        <Typography color={'#888A99'}>Утасны дугаар</Typography>
                                        <Typography>90909090</Typography>
                                    </Stack>
                                    <Button>
                                        <EditIcon sx={{ color: '#18BA51' }} />
                                    </Button>
                                </Stack>
                            
                        </ListItem>
                        
                        <ListItem sx={{padding:1, borderRadius:'10px', bgcolor:'#F6F6F6'}} disablePadding>
                            
                                <ListItemIcon style={profileStyle}>
                                    <ForwardToInboxIcon/>
                                </ListItemIcon>

                                <Stack flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'space-between'} width={'100%'} ml={2}>
                                    <Stack>
                                        <Typography color={'#888A99'}>Имэйл хаяг</Typography>
                                        <Typography>Ugtakhbayr@gmail.com</Typography>
                                    </Stack>
                                    <Button>
                                        <EditIcon sx={{ color: '#18BA51' }} />
                                    </Button>
                                </Stack>
                            
                        </ListItem>

                        {/* History and getting out of the webSite */}
                        <Button sx={{padding:1, borderRadius:'10px', justifyContent:'flex-start', color:'black'}}>                            
                                <ListItemIcon style={profileStyle}>
                                    <HistoryIcon/>
                                </ListItemIcon>    
                                <Typography ml={2}>Захиалгын түүх</Typography>                                                        
                        </Button>
                        <Button sx={{padding:1, borderRadius:'10px', justifyContent:'flex-start', color:'black'}}>                            
                                <ListItemIcon style={profileStyle}>
                                    <LogoutIcon/>
                                </ListItemIcon>    
                                <Typography ml={2}>Гарах</Typography>                                                        
                        </Button>

                    </List>

                </Stack>
            </Box>
            <Footer />
        </Stack>
    )
};