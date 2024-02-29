import { Select, MenuItem, Checkbox, FormControl, Button, Input, } from "@mui/material";
const DistrictSelector = ["Баянзүрх дүүрэг", "Хан-Уул дүүрэг", "Баянгол дүүрэг", "Сонгинохайрхан дүүрэг", "Чингэлтэй дүүрэг"];
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useContext, useState } from "react";
import { orderContext } from "../OrderContext";
export default function District({ selectedCategory }: any) {
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const { orderLocationData, setOrderLocationData }: any = useContext(orderContext);

    const goToOrderSection = () => {
        const orderValues = {
            selectedCategory
        };
        setOrderLocationData(selectedCategory)
    }

    const handleChangeSelectedDistrict = (event: any) => {
        setSelectedDistrict(event.target.value)
        console.log(selectedDistrict, "selectedDistrict");
    }
    return (
        <FormControl sx={{ width: '432px', backgroundColor: '#ECEDF0' }}>
            <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                <option defaultChecked={true} style={{ fontWeight: 400, fontSize: '16px', lineHeight: '19.09px', color: '#8B8E95' }} defaultValue={'Дүүрэг сонгоно уу'}><LocationOnIcon />Дүүрэг сонгоно уу</option>
                {
                    DistrictSelector.map((el, i) => {
                        return (
                            <MenuItem onClick={goToOrderSection} onChange={handleChangeSelectedDistrict} sx={{ display: 'flex', gap: 2 }} key={i} value={el}>
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