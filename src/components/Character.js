// Write your Character component here
import React from "react";
import styled from 'styled-components';

const StyledName = styled.div`
  color: #FFF;
`
const StyledBirthyear = styled.div`
  color: #FFF;
`
const StyledCard = styled.div`
  border: 2px solid red;
`
// const StyledPart = styled.div`
//   border: 2px solid blue;
// `


const Character = (props) => {
    const {characters} = props


    return (

        <div>
            {characters.map((res, index) => {
                return (

                    <StyledCard key={index}>

                        <StyledName>
                            {res.name}
                            <h2>deez</h2>
                        </StyledName>

                        <StyledBirthyear>
                            {res.birth_year}
                            <h2>nutz</h2>
                        </StyledBirthyear>

                    </StyledCard>

                )
            })}
        </div>
    )
}
export default Character;

