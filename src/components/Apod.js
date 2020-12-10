import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const ImgStyled = styled.div`
    border: 1px solid ${(pr) => pr.theme.primaryColor};
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 14px;
    padding: 14px;
    color: ${(pr) => pr.theme.primaryColor};
    background-color: ${(pr) => pr.theme.bgColor};
    
    
img {
  max-width: 100%;
  height: auto;
}
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