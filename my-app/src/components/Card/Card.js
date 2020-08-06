import React from 'react';

//Specify input called props
//Value and props, both aren't keywords
//Props is generally used as an argument name
//Always name this argument as props.
export default function Card(props)
{
    console.log(props);
    return(
        <p> I am a card {props.value} </p>
    )
}