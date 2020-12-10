import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const DetailsStyled = styled.div`

    

`

export default function apodDetails(props) {
    const {apodText, apodTitle, apodDate, apodCopyright} = props;

// console.log("DETAILS", apodText);

return (

<DetailsStyled>
<h2>{apodTitle}</h2>   
<h3>{apodDate} - {apodCopyright}</h3>
<h3>{apodText}</h3>
</DetailsStyled>

    );

}