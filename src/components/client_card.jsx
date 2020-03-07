import React from "react"

const ClientCard = (props) =>
{
return <div>
    <div className="card floatbox">
  <div className="card-content">
    <div className="media">
      <div className="media-content">
          <i className="fa fa-quote-right has-text-danger title"></i>
        <p className="title is-4">{props.title}</p>
        <figure className="image is-64x64">
                <img src={props.image} className="is-rounded" alt="avatars"/>
        </figure>
<p className="subtitle">{props.comment}</p>
<h5 className="has-text-primary is-size-3">-{props.name}</h5>
        
      </div>
    </div>

    <div className="content">
      {props.desc}
      
    </div>
  </div>
</div>
</div>
}

export default ClientCard;