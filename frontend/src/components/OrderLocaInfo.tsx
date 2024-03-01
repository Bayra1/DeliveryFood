import { Select, MenuItem, Checkbox, FormControl, Button, Input, Stack, Box, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { orderContext } from "./OrderContext";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckIcon from '@mui/icons-material/Check';
import AlbumIcon from '@mui/icons-material/Album';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const Khoroo = ['1-р хороо', "2-р хороо", "3-р хороо", "4-р хороо", "5-р хороо", "6-р хороо", "7-р хороо"];
const Apartment = ["Нархан хотхон", "26-р байр", "Хоймор хотхон", "45-р байр", "Зайсан хотхон"];
const DistrictSelector = ["Баянзүрх дүүрэг", "Хан-Уул дүүрэг", "Баянгол дүүрэг", "Сонгинохайрхан дүүрэг", "Чингэлтэй дүүрэг"];

export default function OrderLocInfo() {
    const [selectedApartment, setSelectedApartment] = useState('')
    const { setOrderLocationData }: any = useContext(orderContext);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedKhoroo, setSelectedKhoroo] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isCash, setIsCash] = useState<boolean>(false);
    const [isCard, setIsCard] = useState<boolean>(false);
    const [cashError, setCashError] = useState("");
    const [cardError, setCardError] = useState("");

    const handleChangeSelectedDistrict = (event: any) => {
        const districtValue = event.target.value;

        setSelectedDistrict(districtValue);
        setOrderLocationData((prevState: any) => ({
            ...prevState,
            District: districtValue
        }));
    };

    const handleKhorooChange = (event: any) => {
        const khorooValue = event.target.value;
        setSelectedKhoroo(khorooValue);
        setOrderLocationData((prevState: any) => ({
            ...prevState,
            Khoroo: khorooValue
        }))
    };

    const handleApartmentChange = (event: any) => {
        const apartmentValue = event.target.value;
        setSelectedApartment(apartmentValue);
        setOrderLocationData((prevState: any) => ({
            ...prevState,
            Apartment: apartmentValue
        }));

    };

    const handleChangeAdditionalInfo = (e: any) => {
        const valueAddInfo = e.target.value;
        setAdditionalInfo(valueAddInfo);
    };

    const handNumber = (event: any) => {
        const valueofNumber = event.target.value;
        setPhoneNumber(valueofNumber)
    };

    const handleByCashChange = () => {
        setIsCash(!isCash);
        // console.log(isCash, 'isCash');

        if (isCard) setIsCard(false)
        setCashError('')
    };

    const handleByCardChange = () => {
        setIsCard(!isCard);
        // console.log(isCard, "isCard");

        if (isCash) setIsCash(false)
        setCardError('')
    };

    const validMethodPay = () => {
        if (isCash && isCard) {
            console.log(isCash, isCard, "work");
        } else {
            setCashError("");
            setCardError("");
        }
    };


    const allInfoForStepOne = selectedApartment && selectedDistrict && selectedDistrict && additionalInfo && phoneNumber
    // console.log(allInfoForStepOne, "from ");

    return (
        <Box boxShadow={'0px 0px 20px 0px rgba(0, 0, 0, 0.05)'} bgcolor={'rgba(255, 255, 255, 1)'} width={'fit-content'} height={'fit-content'} padding={'24px'} borderRadius={'16px'} display={'flex'} flexDirection={'column'} gap={'40px'}>

            <Stack sx={{ display: 'flex', flexDirection: 'row', width: '432px', height: '100px', gap: '16px', padding: '16px 24px' }}>
                <Stack sx={{ width: '48px', height: '48px', borderRadius: '50%', bgcolor: allInfoForStepOne ? '#18BA51' : 'rgba(4, 104, 200, 1)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFF' }}>
                    {allInfoForStepOne ? <CheckIcon /> : <RadioButtonCheckedIcon />}
                </Stack>
                <Stack>
                    <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#8B8E95', lineHeight: '16.71px' }}>Алхам 1</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: '20px', color: '#000', lineHeight: '23.87px' }}>Хаягийн мэдээлэл оруулах</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: '16px', color: allInfoForStepOne ? '#18BA51' : 'rgba(4, 104, 200, 1)', lineHeight: '19.09px' }}>{allInfoForStepOne ? "Оруулсан" : "Хүлээгдэж байна"}</Typography>
                </Stack>
            </Stack>

            <Stack display={'flex'} flexDirection={'column'} gap={'16px'}>
                <Typography sx={{ fontWeight: 400, fontSize: '14px', color: 'black' }}>Хаяг аа оруулна уу</Typography>
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

                <FormControl sx={{ width: '432px', backgroundColor: '#ECEDF0' }}>
                    <Select value={selectedApartment} onChange={handleApartmentChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                        <MenuItem sx={{ color: "#8B8E95" }} disabled value=""><em><LocationOnIcon />Байр, гудамж сонгоно уу</em></MenuItem>
                        {Apartment.map((el, i) => (
                            <MenuItem key={i} value={el}>
                                <LocationOnIcon />
                                {el}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Stack>

            <Stack display={'flex'} flexDirection={'column'} gap={'16px'}>
                <Typography sx={{ fontWeight: 400, fontSize: '14px', }}>Нэмэлт мэдээлэл</Typography>
                <Input value={additionalInfo} onChange={handleChangeAdditionalInfo} sx={{ background: '#8B8E95', width: '432px', height: '112px', backgroundColor: '#ECEDF0' }} placeholder="Орц, давхар, орцны код ..." />
            </Stack>

            <Stack display={'flex'} flexDirection={'column'} gap={'16px'}>
                <Typography sx={{ fontWeight: 400, fontSize: '14px', color: 'black' }}>Утасны дугаар*</Typography>
                <Input value={phoneNumber} onChange={handNumber} sx={{ background: '#8B8E95', width: '432px', height: '48px', backgroundColor: '#ECEDF0', padding: '8px 16px', borderRadius: '4px' }} placeholder="Утасны дугаараа оруулна уу" />
            </Stack>
            {/* Pay by Cash or Card */}
            <Stack display={'flex'} flexDirection={'column'} gap={'16px'}>
                <Typography sx={{ fontWeight: 400, fontSize: '14px', color: 'black' }}>Төлбөр төлөх</Typography>

                <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'24px'}>
                    <Stack width={'175px'} display={'flex'} flexDirection={'row'} gap={'8px'}>
                        <Checkbox onClick={validMethodPay} checked={isCash} onChange={handleByCashChange} sx={{ color: 'black' }} />
                        <Typography sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '19.09px', color: '#8B8E95' }}>Бэлнээр</Typography>
                        <Typography sx={{ color: 'red', fontSize: '14px' }}>{cashError}</Typography>
                    </Stack>
                    <Stack width={'175px'} display={'flex'} flexDirection={'row'} gap={'8px'}>
                        <Checkbox onClick={validMethodPay} checked={isCard} onChange={handleByCardChange} sx={{ color: 'black' }} />
                        <Typography sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '19.09px', color: '#8B8E95' }}>Картаар</Typography>
                        <Typography sx={{ color: 'red', fontSize: '14px' }}>{cardError}</Typography>
                    </Stack>
                </Stack>

            </Stack>
        </Box>
    )
};