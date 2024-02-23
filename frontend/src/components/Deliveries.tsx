import { ImportContacts, AccessTime } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Deliveries() {
    const data = [
        {
            icon: ImportContacts,
            revise: "Хүргэлтийн төлөв хянах",
            des: "Захиалга бэлтгэлийн явцыг хянах"
        },
        {
            icon: AccessTime,
            revise: "Шуурхай хүргэлт",
            des: "Захиалга бэлтгэлийн явцыг хянах"
        },
        {
            icon: FavoriteIcon,
            revise: "Эрүүл, баталгаат орц",
            des: "Захиалга бэлтгэлийн явцыг хянах"
        },
        {
            icon: AcUnitIcon,
            revise: "Хоолны өргөн сонголт",
            des: "Захиалга бэлтгэлийн явцыг хянах"
        }
    ]
    return (
        <Box mt={15} sx={{ display: "flex" }} width={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Box display={"flex"} justifyContent={'space-between'} gap={2} width={"80%"}>
                {
                    data.map((element, i) => {
                        return (
                            <Card key={i} sx={{ borderWidth: 1 }}>

                                <CardContent>
                                    <element.icon sx={{ color: "green" }} />
                                    <Typography sx={{ fontSize: 16 }} fontWeight={700} color="black" gutterBottom>
                                        {element.revise}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {element.des}
                                    </Typography>
                                </CardContent>

                            </Card>
                        )
                    })
                }
            </Box>
        </Box>
    )
};

