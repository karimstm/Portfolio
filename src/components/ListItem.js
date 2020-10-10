import React from 'react';
import './ListItem.css';

function ListItem({ title, value}) {
    return (
        <li>
            <span className="title">{title} : </span>
            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{value}</span>
        </li>
    );
}

export default ListItem;