import React from "react"

const customStyle={"height":"350px","width":"350px","backgroundImage":"url(https://source.unsplash.com/400x400/?developers)","boxShadow":"2px 2px 10px 0px rgba(0,0,0,.5)","backgroundSize":"cover"};
const headingStyle={"fontSize":"10em","color":"#ffffff"};
const styles={"backgroundColor":"#243268"};

const Products = () =>
{
    return <div>
        <div className="hero particles-js" style={styles}>
            <div className="hero-body has-text-white">
                <div className="container">
                        <h1 className="title" style={headingStyle}>OUR PRODUCTS</h1>
                        <div className="columns">
                            <div className="column">
                                
                                    <div className="columns">
                                        <div className="column">
                                           
                                                    <div className="box is-medium" style={customStyle} id="left-box">

                                                    </div>

                                                    
                                          
                                        </div>
                                        <div className="column">
                                           
                                           <h1 className="title is-size-3 has-text-white">Underdeveloping</h1>
                                           <h2 className="title is-size-1 has-text-white">EDUTECH - AI & AR BASED EDUCATION PLATFORM</h2>
                                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum possimus nam voluptatem culpa earum debitis, iusto illum tempore esse eaque laudantium similique maxime obcaecati at accusamus et vitae quos!</p>
                                           <a href="#/" className="button is-danger">Read More</a>

                                           
                                 
                               </div>
                                        
                                    </div>
                               
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
}

export default Products;