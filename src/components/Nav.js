import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
 100% {
   opacity: 1;
   transform: scale(1)
 }
`;

const NavStyled = styled.div`
    border: 1px solid ${(pr) => pr.theme.secondaryColor};
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 14px;
    padding: 14px;
    color: ${(pr) => pr.theme.primaryColor};
    background-color: ${(pr) => pr.theme.bgColor};
    animation: ${kf} 3s ease-in-out forwards;
    //width: 60%;
    display: flex;
    justify-content: space-between;

    button {
        color: ${(pr) => pr.theme.secondaryColor};
        background-color: ${(pr) => pr.theme.primaryColor};
        width: 20%;
        font-weight: bold;
    &:hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
    transition: all 0.2s ease-in-out;
  }
`;


export default function apodNav(props) {
    const {apod} = props;

// console.log("NAV", apod);
return (

<NavStyled>
    <button>Prev</button>
    <button>NASA</button>
    <button>GIT</button>
    <button>Next</button>
</NavStyled>

    );

}