import React from "react";
import styled from "styled-components";

const DetailsStyled = styled.div`
  border: 1px solid ${(pr) => pr.theme.secondaryColor};
  box-shadow: 0px 1px 6px -2px #807f7f;
  border-radius: 8px;
  margin-top: 14px;
  padding: 14px;
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
<h2>{apodTitle}</h2>   
<h3>{apodDate} - {apodCopyright}</h3>
<h4>{apodText}</h4>
</DetailsStyled>
    );
}