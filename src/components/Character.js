// Write your Character component here
import React from "react";
import styled from 'styled-components';


const StyledName = styled.div`
  color: #ffffff;
  font-size: 150%;
  letter-spacing: 3px;
  font-weight: bold;
  padding-top: 2%;
`
const StyledBirthyear = styled.div`
  color: rgb(37, 25, 66);
  font-size: 90%;
  font-weight: bold;
  background: rgba(107, 111, 117, 0.8);
  margin: 1%;
  border-top-left-radius: 10%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 50%;
  padding: 1.5%;
  letter-spacing: 3px;
`
const StyledCard = styled.div`
  border: 1.5px solid #7bb36a;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 2%;
  margin-top: 2%;
  padding: 1%;
  display:flex;
  justify-content: space-between;
  font-family: Stencil, "Open Sans Condensed ExtraBold";
  font-weight: 100;
`
const StyledPart = styled.div`
  background: rgba(18, 32, 24, 0.8);
  background: linear-gradient(90deg, rgba(100,70,27, 0.2) 0%, rgba(18, 32, 24, 0.8) 50%, rgba(124,162,400,0.2) 100%);
  padding: 1%;
  margin: 10%;
  border-radius: 3%;
`


const Character = (props) => {
    const {characters} = props


    return (

        <StyledPart>
            {characters.map((res, index) => {
                return (

                    <StyledCard key={index}>

                        <StyledName>
                            {res.name}
                        </StyledName>

                        <StyledBirthyear>
                            {res.birth_year}
                        </StyledBirthyear>

                    </StyledCard>

                )
            })}
        </StyledPart>
    )
}
export default Character;

