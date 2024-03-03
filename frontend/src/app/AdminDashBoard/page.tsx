'use client'
import { Box, Typography, Stack } from "@mui/material";
import { useState } from "react";
import AdminOrderTable from "@/components/AdminOrderTable";
import Navbar from "@/components/Navbar";
import ClassifyAdminHeader from "@/components/ClassifyAdminHeader";
import SearchIcon from "@mui/icons-material/Search";
import useSWR from "swr";

const inputStyle = {
    width: "356px",
    height: "36px",
    borderRadius: "8px",
    borderStyle: "solid",
    borderWidth: "1px",
    backgroundColor: "#ECEDF0",
    paddingLeft: "30px",
    color: "black",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 16
};

const searcIconStyle: any = {
    position: "absolute",
    margin: "8px",
    color: "#121316"
};

export default function AdminDashBoard() {
    const fetcher = (url:string) => fetch(url).then((el) => el.json())
    const [searchByOrderNumber, setSearchOrderNumber] = useState("");
    const {data, error, isLoading} = useSWR("http://localhost:8001/order/retAll", fetcher);
    // console.log(data, "this is daataa");
    

    const handleSearch = (event: any) => {
        setSearchOrderNumber(event.target.value);
    };

    return (
        <Box sx={{ flexDirection: "column" }} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Navbar />
            <Box sx={{ display: "flex", width: "1024px", height: "624px", mt: "84px", borderRadius: "12px", borderStyle: "solid", borderWidth: "1px", borderColor: "#ECEDF0", backgroundColor: "#fff", flexDirection: "column" }}>
                <Box padding={"20px 24px"} width={'100%'} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography sx={{ fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#121316", width: "604px", height: "36px" }}>Admin DashBoard</Typography>
                    <Stack sx={{ position: "relative" }}>
                        <SearchIcon style={searcIconStyle} />
                        <input style={inputStyle} type="text" placeholder=" Search" value={searchByOrderNumber} onChange={handleSearch} />
                    </Stack>
                </Box>
                <ClassifyAdminHeader />
                {/* Table of user information */}
                {!isLoading ? <AdminOrderTable orderUserData={data} /> : <Typography>isLoading</Typography>}
            </Box>
        </Box>
    );
}
