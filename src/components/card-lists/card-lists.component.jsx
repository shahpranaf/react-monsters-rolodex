import React from "react";
import "./card-lists.styles.css";
import { Card } from "../card/card.component";

export const CardLists = props => {
    // return <div className="card-list">{props.children}</div>;

    const { monsters } = props;
    return (
        <div className="card-list">
            {monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    );
};
