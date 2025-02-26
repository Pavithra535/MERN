import { Component } from "react";
/*eslint-disable*/
const trackingMyButtonComp = (Component) =>{
    return(props)=>{
        const handleClick = () =>{
            alert("The tracking info on clicking this button"+props.trackingInfo.cc)
        }
        return(
            <form onClick={handleClick}>
               Email:<input type="text" />
               Password:<input type="text" />
            <Component trackingInfo={...props}/>
            </form>
        )
    }
}
export default trackingMyButtonComp