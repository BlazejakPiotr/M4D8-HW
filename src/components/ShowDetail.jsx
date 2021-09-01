import { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class ShowDetail extends Component {
  state = {
    movie: {},
    comments: [],
  };
  async componentDidMount() {
    try {
    } catch (error) {}
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>{console.log(this.props)} </Col>
        </Row>
      </Container>
    );
  }
}

export default ShowDetail;
