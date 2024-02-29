import React, { createContext, useState } from "react";

interface orderDataType {
    District: String,
    Khoroo: String,
    Apartment: String
}

export const orderContext = createContext({});

export const ProvideOrderData = ({ children }: any) => {
    const [orderLocationData, setOrderLocationData] = useState<orderDataType>();

    return (
        <orderContext.Provider value={{ orderLocationData, setOrderLocationData }}>
            {children}
        </orderContext.Provider>
    );
};
