import React from "react";
import Card from "./card";

const CardsList = ({robots}) =>{
    const robostArray = robots;
    return (
        <div>
            {robostArray.map((user, i) => {
                return (
                    <Card
                        key={i}
                        name={robostArray[i].name}
                        id={robostArray[i].id}
                        email={robostArray[i].email}
                    />
                );
            })}
        </div>
    );
}

export default CardsList;