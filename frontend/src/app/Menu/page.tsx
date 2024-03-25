"use client";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CardActionArea } from "@mui/material";
import { CSSProperties } from "styled-components";
import { FoodModal } from "@/components/FoodModal";
import Navbar from "@/components/Navbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const backEnd = "http://localhost:8001/category/retAll";

const food = "http://localhost:8001/food/retAllfoods";

const styleDiscount: CSSProperties = {
  width: "70px",
  height: "35px",
  fontWeight: 400,
  fontSize: "18px",
  color: "#fff",
  backgroundColor: "#18BA51",
  textAlign: "center",
  borderRadius: "16px",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "#27272",
  position: "absolute",
  top: "16px",
  left: "197px",
  padding: "4px 16px",
};

const styleName = {
  width: "282px",
  height: "27px",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "27px",
  color: "#000000",
};

const buttonStyle = {
  width: "430px",
  height: "43px",
  padding: "8px 16px",
  borderRadius: "8px",
  border: "1px solid",
  gap: "8px",
  color: "Black",
  fontWeight: 500,
  fontSize: "18px",
  borderColor: "#D6D8DB",
};

const styleDiscountedPrice = {
  width: "69px",
  height: "27px",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "27px",
  color: "#18BA51",
};

interface foodItem {
  _id: any;
  image: string;
  name: string;
  discount: number;
  price: number;
  ingredient: string;
}

interface categoryType {
  foodIds: foodItem[];
  name: string;
}

export default function MenuCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [allCategories, setAllCategories] = useState<categoryType[]>([]);
  const [foodCards, setFoodCards] = useState<foodItem[]>([]);
  const [selectedFoodId, setSelectedFoodId] = useState(null);
  const [modalOpen, setModalOpen] = useState<Boolean>(false);
  const [foodData, setFood] = useState<foodItem[]>([]);

  const handleButtonClick = async (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(food);
        const allFoodData = response.data.allFoods;
        setFood(allFoodData);        
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(backEnd);
        setAllCategories(response.data.allCategories);
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filteredCategory = allCategories.find(
        (category) => category.name === selectedCategory
      );
      if (filteredCategory) {
        setFoodCards(filteredCategory.foodIds);
      }
    } else {
      const defaultFoodItems: foodItem[] = [];
      allCategories.filter((el) => {
        if (el.name === "Main Course") {
          const specificFood = el.foodIds.slice(0, 4);
          defaultFoodItems.push(...specificFood);
        }
      });
      setFoodCards(defaultFoodItems);
    }
  }, [selectedCategory, allCategories]);

  const showModal = (foodId: any) => {
    setSelectedFoodId(foodId);
    setModalOpen(true);
  };

  const CloseModal = (foodId: any) => {
    setSelectedFoodId(foodId);
    setModalOpen(false);
  };

  return (
    <Box>
      <Navbar />
      <Stack
        mt={10}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          width={"80%"}
          sx={{ display: "flex" }}
          gap={2}
          justifyContent={"space-between"}
        >
          {allCategories.map((element, index) => (
            <Button
              style={{
                ...buttonStyle,
                backgroundColor:
                  element.name === selectedCategory ? "#18BA51" : "white",
              }}
              key={index}
              onClick={() => handleButtonClick(element.name)}
            >
              {element.name}
            </Button>
          ))}
        </Box>

        <Stack
          mt={10}
          sx={{ display: "flex" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
          width={"80%"}
          gap={2}
        >
          {foodCards.map((item, i) => (
            <Card key={i} sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => showModal(item._id)}>
                <Stack>
                  <CardMedia
                    sx={{ width: "382px", height: "200px" }}
                    component="img"
                    image={item.image}
                  />
                  <Typography style={styleDiscount}>
                    {item.discount}%
                  </Typography>
                </Stack>

                <CardContent>
                  <Typography style={styleName}>{item.name}</Typography>
                  <Stack mt={1} flexDirection={"row"}>
                    <Typography style={styleDiscountedPrice}>
                      {item.discount > 0
                        ? `${item.price - item.price * (item.discount / 100)}₮`
                        : `${item.price}`}
                    </Typography>
                    <Typography sx={{ textDecorationLine: "line-through" }}>
                      {item.price}₮
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}

          {modalOpen && (
            <FoodModal
              food={foodData}
              foodCardId={selectedFoodId}
              CloseModal={CloseModal}
            />
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
