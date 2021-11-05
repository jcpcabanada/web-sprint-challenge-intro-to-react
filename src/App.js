import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Character from "./components/Character";
import styled from "styled-components";

const StyledHead = styled.div`
  font-size: 150%;
  padding-top: 5%;
`

const App = () => {
    const [peopleData, setPeopleData] = useState([]);
    useEffect(() => {
        axios
            //get promise
            .get(`https://swapi.dev/api/people`)

            //after getting promise then do this:
            .then(res => {
                setPeopleData(res.data);
            })

            // if not do this:
            .catch(err => {
                console.error(err);
            })
    }, [])

    // console.log(peopleData);


    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
    // Fetch characters from the API in an effect hook. Remember, anytime you have a
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.

    return (
        <div className="App">
            <StyledHead>
                <a href="https://www.fontspace.com/category/star-wars"><img src="https://see.fontimg.com/api/renderfont4/oPoA/eyJyIjoiZnMiLCJoIjo0NywidyI6MTAwMCwiZnMiOjQ3LCJmZ2MiOiIjRUFEQjFEIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UmVhY3QgV2FyeiA-/rebellion.png" alt="Star Wars fonts"/></a>
            </StyledHead>
            <Character characters={peopleData} />
        </div>
    );
}

export default App;
