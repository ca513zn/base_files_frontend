import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { connect } from "react-redux";
import treasure_chest from "../../../assets/icons/chest.svg";
import diamond from "../../../assets/icons/diamond.svg";
import brain_icon from "../../../assets/icons/brain.svg";

const CreatePreview = (props) => {
  let { name, instructions, gold, diamonds, brain } = props;
  return (
    <div className="create-activity-preview">
      <div className="create-activity-preview-title">
        {name || "Activity name"}
      </div>
      <div className="create-activity-preview-rewards">
        <img src={brain_icon} alt={"brain"} />
        <div className="margin-left-10">{brain}</div>
        <img src={diamond} alt={"diamond"} />
        <div className="margin-left-10">{diamonds}</div>
        <img src={treasure_chest} alt={"gold"} />
        <div className="">{gold}</div>
      </div>
      <div className="create-activity-preview-instructions">
        {instructions || "Type the instructions here..."}
      </div>
      <div className="create-activity-preview-question">Question 1:</div>
      <div className="create-activity-preview-question-text">{}</div>
    </div>
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
    // setName: (params) => dispatch(setName(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePreview);
