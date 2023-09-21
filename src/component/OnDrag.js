import React from "react";
import "../styles/landing.css";
import { Draggable } from "react-drag-reorder";

const Drag = ({Images}) => {

   return(
    <>
    <div className="drag-container">
    <Draggable> 
     {
        Images.map((item, id)=>(
        <div className="drag-image" key={id}>
             <img src={item.path} alt="image" />
             <h4>{item.tag}</h4>
        </div>
        ))
     }
     </Draggable>
    </div>
   
    </>
   ) 
}
export default Drag;