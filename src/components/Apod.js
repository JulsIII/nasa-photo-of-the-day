import React, { useState, useEffect } from "react";




export default function apodDisplay(props) {
    const {apod} = props;

console.log("ASDF", apod);

return (

<div>
    <img src={apod.url} alt='asdf'></img>
</div>

    );

}