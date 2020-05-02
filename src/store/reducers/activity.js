const defaultState = {
  name: "exampleName",
  instructions: "exampleinstructions",
  gold: 10,
  diamonds: 5,
  brain: 1,
  questions: [
    {
      type: "multipleChoice",
      text: "What is the...?",
      correctAnswers: ["one", "single"],
      incorrectAnswers: ["two", 'three'],
    },
  ],
  step: 1,
};

export const setName = (val) => {
  return {
    type: "SET_NAME",
    name: val,
  };
};

export const setStep = (val) => {
  return {
    type: "SET_STEP",
    step: val,
  };
};

export const setInstructions = (val) => {
  return {
    type: "SET_INSTRUCTIONS",
    instructions: val,
  };
};

export const setGold = (val) => {
  return {
    type: "SET_GOLD",
    gold: val,
  };
};

export const setDiamonds = (val) => {
  return {
    type: "SET_DIAMONDS",
    diamonds: val,
  };
};

export const setBrain = (val) => {
  return {
    type: "SET_BRAIN",
    brain: val,
  };
};

export const setQuestions = (val) => {
  return {
    type: "SET_QUESTIONS",
    questions: val,
  };
};
export const setCorrectAnswers = (val, question) => {
  return {
    type: "SET_CORRECT_ANSWER",
    answer: val,
    question: question,
  };
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "SET_STEP":
      return {
        ...state,
        step: action.step,
      };
    case "SET_INSTRUCTIONS":
      return {
        ...state,
        instructions: action.instructions,
      };
    case "SET_GOLD":
      return {
        ...state,
        gold: action.gold,
      };
    case "SET_DIAMONDS":
      return {
        ...state,
        diamonds: action.diamonds,
      };
    case "SET_BRAIN":
      return {
        ...state,
        brain: action.brain,
      };
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: [
          ...state.questions,
        ]
      };
    default:
      return state;
  }
};

export default reducer;
