import React from 'react';

function HeroHomeOne({ className }) {
    return (
        <>
            <section className={`appie-hero-area ${className || ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-hero-content">
                                <h1 className="appie-title">
                                The best phone monitoring software for parental control
                                </h1>
                                <p>
                                Know everything happens on your kids' cell phone or tablet. Without installing an app or physical access. Set up your monitoring in just 2 minutes!
                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            Try now
                                        </a>
                                    </li>
                                    <li>
                                        <a className="item-2" href="#">
                                            View demo
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-hero-thumb">
                                <div
                                    className="thumb wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="200ms"
                                >
                                    <img src='/assets/images/hero-thumb-1.png' alt="" />
                                </div>
                                {/*<div
                                    className="thumb-2 wow animated fadeInRight"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="600ms"
                                >
                                    <img src='/assets/images/hero-thumb-2.png' alt="" />
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape-1">
                    <img src='/assets/images/shape/shape-2.png' alt="" />
                </div>
                <div className="hero-shape-2">
                    <img src='/assets/images/shape/shape-3.png' alt="" />
                </div>
                <div className="hero-shape-3">
                    <img src='/assets/images/shape/shape-4.png' alt="" />
                </div>
            </section>
        </>
    );
}

export default HeroHomeOne;
