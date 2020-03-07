import React from "react"

const ProductCard = (props) =>
{
return <div>
    <div className="card notification floatbox">
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{props.title}</p>
        
      </div>
    </div>

    <div className="content">
      {props.desc}
      
    </div>
  </div>
</div>
</div>
}

export default ProductCard;