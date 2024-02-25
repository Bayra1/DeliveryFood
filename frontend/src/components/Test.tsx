// import React, { useEffect, useState } from 'react';
// import { Button, Typography, Box, Stack, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
// import axios from "axios";

// const backEnd = "http://localhost:8001/category/retAll";

// const MenuCategory = () => {
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [filteredData, setFilteredData] = useState([]);
//     const [foodCards, setFoodCards] = useState([]);

//     const handleButtonClick = async (categoryName) => {
//         setSelectedCategory(categoryName);
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(backEnd);
//                 const allCategories = response.data.allCategories;

//                 if (selectedCategory) {
//                     const filteredCategory = allCategories.find(category => category.name === selectedCategory);
//                     if (filteredCategory) {
//                         setFilteredData(filteredCategory);
//                         setFoodCards(filteredCategory.foodIds);
//                     }
//                 } else {
//                     setFilteredData(allCategories[0]); // Default to the first category
//                     setFoodCards(allCategories[0].foodIds); // Default to the first category's food items
//                 }
//             } catch (error) {
//                 console.log('Failed to fetch data', error);
//             }
//         };

//         fetchData();
//     }, [selectedCategory]);

//     return (
//         <Box>
//             {/* Navbar Component */}
//             <Stack mt={10} width={'100%'} justifyContent={'center'} alignItems={'center'}>
//                 {/* Category Buttons */}
//                 <Box width={'80%'} sx={{ display: 'flex' }} gap={2} justifyContent={'space-between'}>
//                     {filteredData.map((category, index) => (
//                         <Button
//                             key={index}
//                             style={{ ...buttonStyle, backgroundColor: selectedCategory === category.name ? "#18BA51" : "white" }}
//                             onClick={() => handleButtonClick(category.name)}
//                         >
//                             {category.name}
//                         </Button>
//                     ))}
//                 </Box>

//                 {/* Food Cards */}
//                 <Stack mt={10} sx={{ display: 'flex' }} flexDirection={'row'} justifyContent={'space-between'} width={"80%"} gap={2}>
//                     {foodCards.slice(0, 4).map((item, index) => (
//                         <Card key={index} sx={{ maxWidth: 345 }}>
//                             <CardActionArea>
//                                 <Stack>
//                                     <CardMedia
//                                         sx={{ width: "382px", height: "200px", }}
//                                         component="img"
//                                         image={item.image}
//                                         alt="food item"
//                                     />
//                                     <Typography style={styleDiscount}>{item.discount}%</Typography>
//                                 </Stack>

//                                 <CardContent>
//                                     <Typography style={styleName}>{item.name}</Typography>
//                                     <Stack mt={1} flexDirection={"row"}>
//                                         <Typography style={styleDiscountedPrice}>
//                                             {item.discount > 0
//                                                 ? `${item.price - (item.price * (item.discount / 100))}₮`
//                                                 : `${item.price}`
//                                             }
//                                         </Typography>
//                                         <Typography sx={{ textDecorationLine: 'line-through' }}>{item.price}₮</Typography>
//                                     </Stack>
//                                 </CardContent>
//                             </CardActionArea>
//                         </Card>
//                     ))}
//                 </Stack>
//             </Stack>
//         </Box>
//     );
// };

// export default MenuCategory;
