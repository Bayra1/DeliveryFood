import { Select, MenuItem, Checkbox, FormControl, Button, Input, } from "@mui/material";
const Khoroo = ['1-р хороо', "2-р хороо", "3-р хороо", "4-р хороо", "5-р хороо", "6-р хороо", "7-р хороо"];
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useContext, useState } from "react";
import { orderContext } from "../OrderContext";
export default function KhorooInfo() {
    const [selectedKhoroo, setSelectedKhoroo] = useState("");
    const { setOrderLocationData }: any = useContext(orderContext);

    const handleKhorooChange = (event: any) => {
        const khorooValue = event.target.value;
        setSelectedKhoroo(khorooValue);
        // console.log(khorooValue);

        setOrderLocationData((prevState: any) => ({
            ...prevState,
            Khoroo: khorooValue
        }))
    }



    return (
        <FormControl sx={{ width: '432px', backgroundColor: '#ECEDF0' }}>
            <Select value={selectedKhoroo} onChange={handleKhorooChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                <MenuItem disabled value=""><em><LocationOnIcon />Хороо сонгоно уу</em></MenuItem>
                {Khoroo.map((el, i) => (
                    <MenuItem key={i} value={el}>
                        <LocationOnIcon />
                        {el}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}