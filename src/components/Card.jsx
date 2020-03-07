import React from "react"

const Card = (props) =>
{
    return <div>
        <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={props.data["image_url"]} alt="Top"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{props.data["title"]}</p>
        <p className="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div className="content">{props.data["desc"]} <a href="#/">@bulmaio</a>.
      <a href="#/">#css</a> <a href="#/">#responsive</a>
      <br/>
     
    </div>
  </div>
</div>
</div>
   
}

export default Card;