import { Button, Card } from "react-bootstrap";





const MovieCard = ({el}) => {
    console.log(el);
return <div>
    <Card style={{ width: "18rem", height: "38rem", margin: "15px" }}>
<Card.Img variant="top" src={el.food.image} style={{height: "380px"}} />
<Card.Body>
<div style={{heigh:"150px"}}>
  <Card.Title>{el.hints.food.label}</Card.Title>
  
</div>
</Card.Body>
</Card></div>
}

export default MovieCard;