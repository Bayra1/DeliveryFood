import { Select, MenuItem, FormControl } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useContext, useState } from "react";
import { orderContext } from "../OrderContext";
import { SelectChangeEvent } from '@mui/material';

const DistrictSelector = ["Баянзүрх дүүрэг", "Хан-Уул дүүрэг", "Баянгол дүүрэг", "Сонгинохайрхан дүүрэг", "Чингэлтэй дүүрэг"];

export default function District({ selectedCategory }: any) {
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const { setOrderLocationData }: any = useContext(orderContext);

    const handleChangeSelectedDistrict = (event: SelectChangeEvent<string>) => {
        const districtValue = event.target.value;
        // console.log(districtValue, "test");

        setSelectedDistrict(districtValue);
        setOrderLocationData((prevState: any) => ({
            ...prevState,
            District: districtValue
        }));
    }

    return (
        <FormControl sx={{ width: '432px', backgroundColor: '#ECEDF0' }}>
            <Select value={selectedDistrict} onChange={handleChangeSelectedDistrict} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                <MenuItem disabled value=""><em><LocationOnIcon />Дүүрэг сонгоно уу</em></MenuItem>
                {DistrictSelector.map((el, i) => (
                    <MenuItem key={i} value={el}>
                        <LocationOnIcon />
                        {el}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
