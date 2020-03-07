import React from "react";
import Navbar from "./navbar";

const styles={"backgroundColor":"#243268"};
const heading = "Building Products & Professionals one at time.";

//const box={"borderTopLeftRadius":"65px","borderBottomRightRadius":"65px","width":"500px","height":"500px","boxShadow":"10px 5px 0px 0px rgba(0,0,0,0.5)"};

//const heroStyle={"background":"linear-gradient(120deg,#122B40,#446cb3)"};

const imgUrl="https://source.unsplash.com/400x400/?Student-Training";

const iconStyle={"marginRight":"10px"};


const Hero = () =>
{
    return <div>
        <div className="hero is-medium is-primary" style={styles} id="particles-js">
            <Navbar/>
            <div className="hero-body">
                <div className="columns">
                    <div className="column">
                    <h1 className="title is-size-1 has-text-white">{heading}</h1>
                    <p className="subtitle has-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quos fugit commodi ut, dolore, pariatur sed minima quia perspiciatis 
                    libero consequuntur aliquid modi id eum ab porro error vitae odit?</p>
                    <a href="#/" className="button is-danger has-text-white">More About What we do.<i className="fa fa-arrow-right" style={iconStyle}></i></a>
                    </div>

                    <div className="column">
                    <figure className="image is-square">
                            <img src={imgUrl} alt="top-side"/>
                    </figure>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default Hero;