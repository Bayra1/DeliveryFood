import { Select, MenuItem, Checkbox, FormControl, Button, Input, } from "@mui/material";
const Apartment = ["Нархан хотхон", "26-р байр", "Хоймор хотхон", "45-р байр", "Зайсан хотхон"];
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useContext, useState } from "react";
import { orderContext } from "../OrderContext";
export default function ApartmentInfo() {
    const [selectedApartment, setSelectedApartment] = useState('')
    const { setOrderLocationData }: any = useContext(orderContext);

    const handleApartmentChange = (event: any) => {
        const apartmentValue = event.target.value;
        setSelectedApartment(apartmentValue);
        // console.log(apartmentValue, "apart");
        setOrderLocationData((prevState: any) => ({
            ...prevState,
            Apartment: apartmentValue
        }))

    };

    return (
        <FormControl sx={{ width: '432px', backgroundColor: '#ECEDF0' }}>
            <Select value={selectedApartment} onChange={handleApartmentChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                <MenuItem sx={{color:"#8B8E95"}} disabled value=""><em><LocationOnIcon />Байр, гудамж сонгоно уу</em></MenuItem>
                {Apartment.map((el, i) => (
                    <MenuItem key={i} value={el}>
                        <LocationOnIcon />
                        {el}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}