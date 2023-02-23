import React,{ useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import MovieCard from "./components/MovieCard";

const Filter = () => {
    const[text, setText] = useState("");
    const[result, setResult] = useState([]);
    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
      params: {ingr: 'apple'},
      headers: {
        'X-RapidAPI-Key': '9610f1264emshe0980c1c8e3da51p1f76cajsn49471fe5f4b4',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
      }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.request(options).then(function (response) {
          console.log(response);
          setResult(response.data)
        }).catch(function (error) {
          console.error(error);
        });

    }
  
  
    return (
      <div>
        <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto" style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
            <Nav.Link href="#home">J.Movies</Nav.Link>
           <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button>search</button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
    {result.map((el) => <div key={el.id}><MovieCard el={el}/></div>)}
    <div>

    </div>

      </div>
    
    );
    };
    
    export default Filter;
    