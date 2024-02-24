'use client'

import { createContext, useContext, useState } from "react";

export const foodContext = createContext({})

export const giverFoodData = ({ children }: any) => {
    const [foodData, setFoodData] = useState([]);
    return (
        <foodContext.Provider value={[foodData, setFoodData]}>
            {children}
        </foodContext.Provider>
    )
};




