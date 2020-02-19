import React, { Component } from "react"
import { Card, CardBody, CardTitle, CardText, CardImg, Row, Col } from "reactstrap"

class Interests extends Component {
  render() {
    return (
      <div >
      <Row>
        <Col xs="6">
          <Card className = 'card'>
            <CardImg src={require("./trading.jpeg")} alt="Card image cap" class="img-responsive" class="displayed"/>
            <CardBody>
              <CardTitle>Algorithmic Trading</CardTitle>
              <CardText>Man... trading with computers huh, interesting stuff eh?</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6">
          <Card className = 'card'>
            <CardImg src={require("./monkey.jpeg")} alt="Card image cap" class="img-responsive" class="displayed"/>
            <CardBody>
              <CardTitle>Market Psychology</CardTitle>
              <CardText>No one knows what goes on except for me, i am market psychologist</CardText>
            </CardBody>
            
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
        <Card className = 'card'>
          <CardImg src={require("./tools.jpeg")} alt="Card image cap" class="img-responsive" class="displayed"/>
          <CardBody>
            <CardTitle>Building Things</CardTitle>
            <CardText>Man... building stuff huh, interesting stuff eh?</CardText>
          </CardBody>
        </Card>
        </Col>
        <Col xs="6">
        <Card className = 'card'>
          <CardImg src={require("./art.jpeg")} alt="Card image cap" class="img-responsive" class="displayed"/>
          <CardBody>
            <CardTitle>Art</CardTitle>
            <CardText>You know, just like art...</CardText>
          </CardBody>
          
        </Card>
        </Col>
      </Row>
        </div>
    )
  }
}
 
export default Interests