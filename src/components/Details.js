import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const DetailsStyled = styled.div`
  border: 1px solid #d2d2d2;
  box-shadow: 0px 1px 6px -2px #807f7f;
  border-radius: 8px;
  margin-top: 16px;
  padding: 16px;
  color: ${(pr) => pr.theme.primaryColor};
  background-color: ${(pr) => pr.theme.bgColor};

  h3{

    color: ${(pr) => pr.theme.secondaryColor};

  }
`

export default function apodDetails(props) {
    const {apodText, apodTitle, apodDate, apodCopyright} = props;

// console.log("DETAILS", apodText);

return (

<DetailsStyled>
<h2>{apodTitle}Title</h2>   
<h3>{apodDate}Date - {apodCopyright}Name</h3>
<h4>{apodText}Harsh psych tough awesome barf bag righteous bitchin' excellent big time no can do awesome. Barf me out for sure airhead word lame chicken wicked word lame wicked wicked gotta motor. Gotta motor bogus chicken most definitely bite me blar word stellar totally. No can do harsh gotta motor wicked wicked radical wicked fantabulous tough bogus whoa barf bag. Big time wicked excellent get crucial narbo yes way waver get crucial airhead. Whoa totally narbo fantabulous mad yo waver chicken bag your face yes way chicken tough. Narbo yes way righteous tough heinous barf me out heinous barf me out. Bodacious whoa word wicked tough most definitely mega yo no can do gotta motor.</h4>
</DetailsStyled>

    );

}