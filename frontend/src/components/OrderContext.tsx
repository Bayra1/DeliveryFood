import React, { createContext, useState } from "react";

interface orderDataType {
    District: String,
    Khoroo: String,
    Apartment: String
}

export const orderContext = createContext({});

export const ProvideOrderData = ({ children }: any) => {
    const [orderLocationData, setOrderLocationData] = useState<orderDataType>({
        District: "",
        Khoroo: "",
        Apartment: ""
    });
    // console.log([orderLocationData], "from orderContext");
    

    return (
        <orderContext.Provider value={{ orderLocationData, setOrderLocationData }}>
            {children}
        </orderContext.Provider>
    );
};


// export const orderContext = createContext({
//     orderDetail: [],
//     toOrderPost: (orderInfo: any) => { }
// });

// export const ProvideOrderData = ({ children }: any) => {
//     const [orderLocationData, setOrderLocationData] = useState<any>([]);
    
//     const toOrderPost: any = (orderInfo: any) => {
//         setOrderLocationData([...orderLocationData, orderInfo])
//     }
//     console.log(orderLocationData, "from orderContext");

//     return (
//         <orderContext.Provider value={{ orderLocationData, setOrderLocationData, toOrderPost }}>
//             {children}
//         </orderContext.Provider>
//     );
// };

