import { Select, MenuItem, Checkbox, FormControl, Button, Input, } from "@mui/material";
const Apartment = ["Нархан хотхон", "26-р байр", "Хоймор хотхон", "45-р байр", "Зайсан хотхон"];
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function ApartmentInfo() {
    return (
        <FormControl sx={{ width: '432px', backgroundColor: '#ECEDF0' }}>
            <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                <option defaultChecked={true} style={{ fontWeight: 400, fontSize: '16px', lineHeight: '19.09px', color: '#8B8E95' }} defaultValue={'Дүүрэг сонгоно уу'}><LocationOnIcon />Дүүрэг сонгоно уу</option>
                {
                    Apartment.map((el, i) => {
                        return (
                            <MenuItem sx={{ display: 'flex', gap: 2 }} key={i} value={el}>
                                <LocationOnIcon />
                                {el}
                            </MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    )
}