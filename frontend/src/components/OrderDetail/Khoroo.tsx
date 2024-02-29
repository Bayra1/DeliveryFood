import { Select, MenuItem, Checkbox, FormControl, Button, Input, } from "@mui/material";
const Khoroo = ['1-р хороо', "2-р хороо", "3-р хороо", "4-р хороо", "5-р хороо", "6-р хороо", "7-р хороо"];
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function KhorooInfo() {
    return (
        <FormControl sx={{ width: '432px', backgroundColor: '#ECEDF0' }}>
            <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                <option defaultChecked={true} style={{ fontWeight: 400, fontSize: '16px', lineHeight: '19.09px', color: '#8B8E95' }} defaultValue={'Дүүрэг сонгоно уу'}><LocationOnIcon />Дүүрэг сонгоно уу</option>
                {
                    Khoroo.map((el, i) => {
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