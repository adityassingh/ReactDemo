import React from "react"
import Card from "./Card"



const card1_data={
    "icon":"fas fa-chalkboard-teacher",
    "title":"STUDENT TRAINING",
    "image_url":"https://source.unsplash.com/400x400/?Student-Training",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}

const card2_data={
    "icon":"fas fa-chalkboard-teacher",
    "title":"RESEARCH & DEV",
    "image_url":"https://source.unsplash.com/400x400/?Developer",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}

const card3_data={
    "icon":"fas fa-chalkboard-teacher",
    "title":"PROMOTIONS",
    "image_url":"https://source.unsplash.com/400x400/?Office",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}

const Category = () =>
{
    return <div>
        <div className="hero">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-dark is-size-1 has-text-centered">Explore by Category</h1>
                    <div className="columns">
                        <div className="column">
                                
                                        <Card data={card1_data}/>
                             
                        </div>
                        <div className="column">
                                
                                <Card data={card2_data}/>
                               
                        </div>
                        <div className="column">
                                
                                <Card data={card3_data}/>
                              
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Category;