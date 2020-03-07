import React from "react"
import ClientCard from "./client_card"



const about_desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus numquam, nobis praesentium doloribus a illo assumenda perspiciatis sequi expedita. Veniam exercitationem deserunt modi minus illum mollitia tempore odit ipsum libero.";
const client_comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus earum doloribus aliquam iusto maiores beatae excepturi similique eius labore libero animi minima magnam saepe, voluptatum aspernatur! Illum, iusto aperiam?";

const About = ()=>
{
    return <div>
        <div className="hero">
            <div className="hero-body has-text-centered">
                    <div className="container">
                        <h1 className="title about_head">ABOUT US</h1>
                        <p className="subtitle desc_about">
                            {about_desc}
                        </p>
                        <br/>
                        <h3 className="is-size-5 what">What our clients Say about our Services</h3>
                        <div className="columns">
                            <div className="column">
                            <ClientCard image="https://i.pravatar.cc/150?img=3" comment={client_comment} name="Sumit"/>
                            </div>
                            <div className="column">
                            <ClientCard image="https://i.pravatar.cc/150?img=38" comment={client_comment} name="Komal"/>
                            </div>
                            <div className="column">
                            <ClientCard image="https://i.pravatar.cc/150?img=12" comment={client_comment} name="Aditya"/>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
            </div>
        </div>
    </div>
}

export default About;