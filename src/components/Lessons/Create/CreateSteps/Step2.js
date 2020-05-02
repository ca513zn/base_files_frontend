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
  Table,
  ButtonToggle,
} from "reactstrap";
import { connect } from "react-redux";
import { setQuestions } from "../../../../store/reducers/activity";
import trash from "../../../../assets/icons/trash.svg";
const answersTable = (array) => {
  return array.map((element, index) => {
    return (
      <tr>
        <td>{element}</td>
        <td>
          <img className="w-px-50" src={trash} alt={"brain"} />
        </td>
      </tr>
    );
  });
};

const CreateFormStep2 = (props) => {
  let { questions } = props;
  const [correctAnswersQty, setCorrectAnswerQty] = useState(1);
  const [currentEditedQuestion, setCurrentEditedQuestion] = useState(0);
  const renderCorrectAnswers = (questionNumber) => {
    const correctAnswerArray = [];
    questions.forEach((question, i) => {
      if (questionNumber === i) {
        question.correctAnswers.map((answer, index) => {
          correctAnswerArray.push(
            <Input
              value={answer}
              type="text"
              name="correctAnswer"
              id="correctAnswer"
              key={"correctAnswer" + index}
              // onChange={(e) => setQuestions(e.target.value)}
            />
          );
        });
      }
    });
    return correctAnswerArray;
  };
  const renderIncorrectAnswers = (questionNumber) => {
    const incorrectAnswerArray = [];
    questions.forEach((question, i) => {
      if (questionNumber === i) {
        question.incorrectAnswers.map((answer, index) => {
          incorrectAnswerArray.push(
            <Input
              value={answer}
              type="text"
              name="incorrectAnswer"
              id="incorrectAnswer"
              key={"incorrectAnswer" + index}
              onChange={(e) => setQuestions(e.target.value)}
            />
          );
        });
      }
    });
    return incorrectAnswerArray;
  };

  const renderQuestions = () => {
    questions.forEach((element, index) => {});
  };

  return (
    <>
      <div className="questions-step-2-title-bar">
        <h2>Question {currentEditedQuestion + 1}</h2>
        <div>
          {currentEditedQuestion + 1} / {questions.length}
        <ButtonToggle className="margin-left-10" color="info">Add</ButtonToggle>
        </div>
      </div>
      <Form>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="category">Type</Label>
              <Input type="select" name="category" id="Category">
                <option>Multiple choice</option>
                <option>Fill in the blank</option>
                <option>Reading activity</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="question">Question text</Label>
          <Input
            value={questions[0].text}
            type="text"
            name="question"
            id="question"
            onChange={(e) => setQuestions(e.target.value)}
          />
        </FormGroup>
      </Form>
      <FormGroup>
        <Label for="correctAnswer">Correct Answers</Label>
        <Input
          value={questions[0].correctAnswers[0]}
          type="text"
          name="correctAnswer"
          id="correctAnswer"
          key={"correctAnswer"}
          // onChange={(e) => setQuestions(e.target.value)}
        />
        <Table size="sm">
          <tbody>{answersTable(questions[0].correctAnswers)}</tbody>
        </Table>
      </FormGroup>
      <FormGroup>
        <Label for="incorrectAnswer">Incorrect Answers</Label>
        {renderIncorrectAnswers(0)}
      </FormGroup>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    questions: state.Activity.questions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuestions: (params) => dispatch(setQuestions(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateFormStep2);
