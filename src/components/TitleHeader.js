import React from 'react';
import './TitleHeader.css';

function TitleHeader({title, titleBg, coloredWord}) {
    return (
        <section className="title-section text-left text-sm-center">
            <h1>{title} <span>{coloredWord}</span></h1>
        <span className="title-bg">{titleBg}</span>
        </section>
    );
}

export default TitleHeader;