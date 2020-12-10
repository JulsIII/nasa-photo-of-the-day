import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";


const NavStyled = styled.div`



`



export default function apodNav(props) {
    const {apod} = props;

// console.log("NAV", apod);
return (

<NavStyled>
    <button>Prev</button>
    <button>Next</button>
</NavStyled>

    );

}