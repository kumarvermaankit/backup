import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
// import { ReactComponent as S } from "../Android_-_1.svg"
import {Card,Button} from "react-bootstrap";
function StartingPage(){

    return(
        <div >
        
     <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
{/* <div><S /></div> */}
        </div>
    )
}



export default StartingPage