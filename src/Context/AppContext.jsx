import React from "react";
import { useState } from "react";
import { createContext } from "react";

//context created as AppCtx
export const AppCtx=createContext(null);

export default function AppContext({children}){

    //necessary values for the cart
    const productImg="https://m.media-amazon.com/images/I/61zI3vw9KOL._AC_UY218_.jpg";
    const productName="JBL Bar 800 Pro";
    const productDescription="(5.1.2) Channel Truly Wireless Soundbar with True Dolby Atmos® 3D Surround Sound, 10” Down-Firing Wireless Subwoofer, PureVoice, HDMI eARC, Bluetooth, Wi-Fi & Optical Input (720W)";
    const productRating="8.48";
    const productPrice=84396;
    const productDiscount=18.65;
    
    //necessary states for the cart
    const [cartCount,setCartCount]=useState(0);
    const [productStock,setProductStock]=useState(230);
    const [subTotal,setSubTotal]=useState(0);
    const [total,setTotal]=useState(0);
    const [saved,setSaved]=useState(0);
    

    return(
       
        //context values and states is passed
           <AppCtx.Provider 
            value={{
                productImg,
                productName,
                productDescription,
                productRating,
                productPrice,
                productDiscount,
                cartCount,
                setCartCount,
                productStock,
                setProductStock,
                subTotal,
                setSubTotal,
                total,
                setTotal,
                saved,
                setSaved
            }}
           >
            {/* children property used to use the context for all the childrens */}
            {children}
           </AppCtx.Provider>
       
    )
}

