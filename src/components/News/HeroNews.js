import React from 'react';
import Link from "next/link";

function HeroNews({ title, breadcrumb = [] }) {
    return (
        <>
            <div className="appie-page-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-page-title-item">
                                <h3 className="title">{title}</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        {breadcrumb.map((value) => (
                                            <li key={Math.random()} className="breadcrumb-item">
                                                <Link href={value.link}>{value.title}</Link>
                                            </li>
                                        ))}
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroNews;
