import React from "react";
import "../Details/Style.css";
import { Form, Row, Col, Button } from "react-bootstrap";
export const Booking = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Online Booking</h1>

      <Form className="book">
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Business Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>
        <Form.Label column sm={2}>
          Preference
        </Form.Label>
        <Form.Control
          as="select"
          className="my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
        >
          <option value="0">Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Control>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign in</Button>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
