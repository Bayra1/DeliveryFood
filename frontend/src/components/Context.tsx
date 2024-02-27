import React, { createContext, useState } from "react";

export const foodContext = createContext({})

export const GiveFoodData = ({ children }: any) => {
    const [foodData, setFoodData] = useState([]);
    return (
        <foodContext.Provider value={[foodData, setFoodData]}>
            {children}
        </foodContext.Provider>
    )
};
