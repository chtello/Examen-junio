import React from 'react';
import '../css/cards.css';

function Cards({ items }) {
    return (
        <div className="cards">
            {items.map((i) => (
                <div key={i.id} className="card">
                    <img src={i.image} alt={i.title} />
                    <p>{i.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Cards;