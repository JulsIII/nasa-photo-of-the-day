import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const ImgStyled = styled.div`
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 16px;
    padding: 16px;
    color: ${(pr) => pr.theme.primaryColor};
    background-color: ${(pr) => pr.theme.bgColor};
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