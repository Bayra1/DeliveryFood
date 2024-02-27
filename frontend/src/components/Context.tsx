"use client"
import React, { createContext, useState } from "react";

export const foodContext = createContext({
    foodData: [],
    toBasket: (food: any) => { },
    renewFoodData: () => { }
});

export const GiveFoodData = ({ children }: any) => {
    const [foodData, setFoodData] = useState<any>([]);
    const renewFoodData: any = (updatedFoodData: any) => {
        setFoodData(updatedFoodData);
    };

    const toBasket: any = (foodSingle: any) => {
        setFoodData([...foodData, foodSingle])
    };

    return (
        <foodContext.Provider value={{ foodData, toBasket, renewFoodData }}>
            {children}
        </foodContext.Provider>
    )
};
