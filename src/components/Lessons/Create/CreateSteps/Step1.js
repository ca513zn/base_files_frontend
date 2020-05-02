import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
} from "reactstrap";
import { connect } from "react-redux";
import {
  setName,
  setInstructions,
  setGold,
  setDiamonds,
  setBrain,
} from "../../../../store/reducers/activity";

const CreateFormStep1 = (props) => {
  let {
    name,
    setName,
    instructions,
    setInstructions,
    gold,
    setGold,
    diamonds,
    setDiamonds,
    brain,
    setBrain,
  } = props;
  return (
    <>
    <h2>
      Activity details
    </h2>
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          value={name}
          type="text"
          name="name"
          id="Name"
          placeholder="Activity name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="category">Category</Label>
            <Input type="select" name="category" id="Category">
              <option>Multiple choice</option>
              <option>Fill in the blank</option>
              <option>Reading activity</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="gold">Gold</Label>
            <Input
              value={gold}
              type="number"
              name="gold"
              id="Gold"
              min="0"
              max="2500"
              onChange={(e) => setGold(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="diamonds">Diamonds</Label>
            <Input
              value={diamonds}
              type="number"
              name="diamonds"
              id="Diamonds"
              min="0"
              max="2500"
              onChange={(e) => setDiamonds(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="brain">Brain</Label>
            <Input
              value={brain}
              type="number"
              name="brain"
              id="Brain"
              min="0"
              max="2500"
              onChange={(e) => setBrain(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="instructions">Instructions</Label>
        <Input
          value={instructions}
          type="textarea"
          name="instructions"
          id="instructions"
          onChange={(e) => setInstructions(e.target.value)}
        />
      </FormGroup>
    </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.Activity.name,
    instructions: state.Activity.instructions,
    gold: state.Activity.gold,
    diamonds: state.Activity.diamonds,
    brain: state.Activity.brain,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (params) => dispatch(setName(params)),
    setInstructions: (params) => dispatch(setInstructions(params)),
    setGold: (params) => dispatch(setGold(params)),
    setDiamonds: (params) => dispatch(setDiamonds(params)),
    setBrain: (params) => dispatch(setBrain(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateFormStep1);
