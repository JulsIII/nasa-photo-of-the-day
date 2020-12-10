import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const ImgStyled = styled.div`

    

`

export default function apodDisplay(props) {
    const {apodImg} = props;

// console.log("APOD", apodImg);

return (

<ImgStyled>
    <img src={apodImg} alt='APOD'></img> 
</ImgStyled>

    );

}