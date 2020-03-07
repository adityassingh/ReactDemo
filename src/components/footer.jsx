import React from "react"

const year = new Date().getFullYear();
const styles={"backgroundColor":"#243268"};
const sub_style={"fontWeight":"200","color":"#ffffff"}
const style3={"color":"#cccccc"};
const Footer = () =>
{
    return <div>
        <div className="hero" style={styles}>
            <div className="hero-body">
                <div className="columns">

                    <div className="column">
                        <h1 className="title has-text-white is-size-1">Exposys</h1>
                        <h2 className="subtitle is-size-2 sub" style={sub_style}>Data Labs.</h2>
                        <a className="subtitle is-size-4 has-text-white" href="mailto:hr@exposysdata.com">hr@exposysdata.com</a>
                    </div>

                    <div className="column">
                        <h5 className="subtitle has-text-white">Categories</h5>
                        <ul className="cat-links">
                            <li>
                                <a href="#/">Training Programs</a>
                            </li>
                            <li>
                                <a href="#/">Research & Dev</a>
                            </li>
                            <li>
                                <a href="#/">About</a>
                            </li>
                            <li>
                                <a href="#/">Promotions</a>
                            </li>

                            <li>
                                <a href="#/">Testimonials</a>
                            </li>
                        </ul>
                    </div>

                    <div className="column">
                        <h5 className="subtitle has-text-white">Social Media</h5>
                        <ul className="cat-links">
                            <li>
                                <a href="#/"><i className="fab fa-whatsapp"></i> Whatsapp</a>
                            </li>
                            <li>
                                <a href="#/"><i className="fab fa-facebook"></i> Facebook</a>
                            </li>
                            <li>
                                <a href="#/"><i className="fab fa-linkedin"></i> Linkedin</a>
                            </li>
                            <li>
                                <a href="#/"><i className="fab fa-youtube"></i> Youtube</a>
                            </li>
                        </ul>
                    </div>

                    <div className="column">
                        <p className="subtitle has-text-white">
                            PMR Residency Ground Floor, No-5/3 Sy. No. 10/6-1
                            Opp Nityotasava Wedding Hall Dodaballapur Main Road Singanayakanahalli,Yelehanka Bangaluru,Karnatka 560064
                        </p>
                        
                    </div>

                </div>
                <hr/>
                <div className="columns">
                    <div className="column is-6">
                        <p className="subtitle is-size-6" style={style3}>{year} Exposys Data Labs . All Rights Resereved.</p>
                    </div>
                    <div className="column">
                        <a className="subtitle is-size-6" style={style3} href="#/">Terms of Service</a>
                    </div>
                    <div className="column">
                        <a className="subtitle is-size-6" style={style3} href="#/">Cookies Policy</a>
                    </div>
                    <div className="column">
                        <a className="subtitle is-size-6" style={style3} href="#/">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default Footer;