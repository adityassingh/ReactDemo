import React from "react"
import ProductCard from "./ProductCard"

const desc="Lorem ipsum dolor,sit amet consectetur adipisicing elit. Odit, repudiandae illo? Odio, dolore. Provident ullam necessitatibus aut iusto dolor, mollitia repellendus et nihil adipisci, explicabo sed soluta, rerum asperiores officiis.";


const Hero2 = () =>
{
    return <div>
        <div className="hero" id="hero2">
            <div className="hero-body has-text-centered">
                <h3 className="subtitle">OUR SERVICES</h3>
                <h1 className="title">RESEARCH & DEV</h1>
                <center><hr className="type_3"/></center>
                <p>Our business people a solution and services to help to increase productivity, innovation.</p>
                <div className="columns">
                    <div className="column">
                    <ProductCard title="Energy" desc={desc} />
                    </div>
                    <div className="column">
                    <ProductCard title="Humanoid" desc={desc}/>
                    </div>
                    <div className="column">
                    <ProductCard title="E-Security" desc={desc}/>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                    <ProductCard title="ML Projects" desc={desc}/>
                    </div>
                    <div className="column">
                    <ProductCard title="Defense" desc={desc}/>
                    </div>
                    <div className="column">
                    <ProductCard title="AI Projects" desc={desc}/>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                    <ProductCard title="Medical" desc={desc}/>
                    </div>
                    <div className="column">
                    <ProductCard title="Blockchain Technology" desc={desc}/>
                    
                    </div>
                    
                </div>
                <a href="#/" className="button is-danger is-rounded">CHECK OUT NOW</a>
            </div>

        </div>
    </div>
}


export default Hero2;