import React from "react";
import { connect } from "react-redux";
import { setStep } from "../../../store/reducers/activity";
import CreateFormStep1 from "./CreateSteps/Step1";
import CreateFormStep2 from "./CreateSteps/Step2";

const CreateForm = (props) => {
  let { step, setStep } = props;
  const CreateFormNav = () => {
    return (
      <div className="create-form-nav">
        <div
          className={step === 1 && "create-form-nav-active"}
          onClick={() => setStep(1)}
        >
          Details
        </div>
        <div
          className={step === 2 && "create-form-nav-active"}
          onClick={() => setStep(2)}
        >
          Questions
        </div>
        <div
          className={step === 3 && "create-form-nav-active"}
          onClick={() => setStep(3)}
        >
          Confirm
        </div>
      </div>
    );
  };
  return (
    <>
      <CreateFormNav />
      <div className="step-border">
        {step === 1 && <CreateFormStep1 />}
        {step === 2 && <CreateFormStep2 />}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    step: state.Activity.step,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStep: (params) => dispatch(setStep(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
