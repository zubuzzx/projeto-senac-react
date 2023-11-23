import React from "react"
function ItemServico(props){
    return(
        <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <img src={props.image} alt={props.title} />
    </div>
    )
}

export default ItemServico