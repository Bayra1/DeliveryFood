import { Stack, Box, Typography, TextField, InputBase, styled, } from "@mui/material";
import Navbar from "@/components/Navbar";
import ClassifyAdminHeader from "@/components/ClassifyAdminHeader";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "@mui/icons-material";
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }:any) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  


export default function AdminDashBoard() {
    return (
        <Box sx={{ flexDirection: "column" }} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Navbar />
            <Box sx={{ display: "flex", width: "1024px", height: "624px", mt: "84px", borderRadius: "12px", borderStyle: "solid", borderWidth: "1px", borderColor: "#ECEDF0", backgroundColor: "#fff", flexDirection: "column" }}>
                <Box padding={"20px 24px"} width={'100%'} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography sx={{ fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#121316", width: "604px", height: "36px" }}>Admin DashBoard</Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Box>
                <ClassifyAdminHeader />
            </Box>
        </Box>
    )
}