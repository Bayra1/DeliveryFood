import { useContext } from "react";
import { foodContext } from "./Context";

function test() {
    const {foodData} = useContext(foodContext)
    console.log("this is foodData", foodData);
}
return (
    <div>
        test kk
    </div>
)