import React, { useState } from "react";
import CreateForm from "./CreateForm";
import CreatePreview from "./CreatePreview";
import { connect } from "react-redux";
import { setName } from "../../../store/reducers/activity";

import "../../../styles/app.css";

const CreateLesson = (props) => {
  let { name, setName } = props;
  const [question, setQuestion] = useState(2);

  const renderQuestions = () => {
    let questions = [];
    for (let index = 0; index < question; index++) {
      questions.push(
        <>
          <div className="divider w-full px-3 mt-4"></div>
          <div class="w-full px-3 mt-4">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Question {index + 1}
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="textarea"
              placeholder="What does the word BROOM mean?"
            />
            {/* <p class="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p> */}
          </div>
          <div class="w-full px-3 mt-4">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs mb-2"
              for="grid-password"
            >
              Correct answer
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="textarea"
              placeholder="It is used for sweeping?"
            />
          </div>

          <div class="w-full px-3 mt-4">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Incorrect answer
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="textarea"
              placeholder="It is used for drying."
            />
            {/* <p class="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p> */}
          </div>
        </>
      );
    }

    return questions;
  };

  return (
    <div className="page-wrapper-lesson-create">
      <div className="page-wrapper-lesson-form">
        <CreateForm />
      </div>
      <div className="page-wrapper-lesson-preview">
        <CreatePreview />
      </div>
    </div>
  );

  // return (
  //   <>
  //       <div className="page-title margin-bottom-30 margin-top-20">
  //         New Activity:
  //       </div>
  //       <form class="w-full max-w-lg">
  //         <div class="flex flex-wrap -mx-3 mb-6">
  //           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  //             <label
  //               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  //               for="grid-first-name"
  //             >
  //               Activity name
  //             </label>
  //             <input
  //               class="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
  //               id="grid-first-name"
  //               type="text"
  //               placeholder="Hotel vocabulary"
  //             />
  //             {/* <p class="text-red-500 text-xs italic">
  //               Please fill out this field.
  //             </p> */}
  //           </div>
  //           <div class="w-full md:w-1/2 px-3">
  //             <label
  //               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  //               for="grid-last-name"
  //             >
  //               Category
  //             </label>
  //             <input
  //               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  //               id="grid-last-name"
  //               type="text"
  //               placeholder="Vocabulary"
  //             />
  //           </div>
  //         </div>
  //         <div class="flex flex-wrap -mx-3 mb-6">
  //           <div class="w-full px-3">
  //             <label
  //               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  //               for="grid-password"
  //             >
  //               Instructions
  //             </label>
  //             <input
  //               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  //               id="grid-password"
  //               type="textarea"
  //               placeholder="Match the vocabulary word to the correct definition."
  //             />
  //             {/* <p class="text-gray-600 text-xs italic">
  //               Make it as long and as crazy as you'd like
  //             </p> */}
  //           </div>
  //         </div>
  //         <div class="flex flex-wrap -mx-3 mb-2">
  //           <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
  //             <label
  //               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  //               for="grid-city"
  //             >
  //               Gold
  //             </label>
  //             <input
  //               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  //               id="grid-city"
  //               type="number"
  //               defaultValue="100"
  //             />
  //           </div>
  //           <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
  //             <label
  //               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  //               for="grid-state"
  //             >
  //               Diamonds
  //             </label>
  //             <div class="relative">
  //               <input
  //                 class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  //                 id="grid-city"
  //                 type="number"
  //                 defaultValue="0"
  //               />
  //             </div>
  //           </div>
  //           <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
  //             <label
  //               class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  //               for="grid-zip"
  //             >
  //               Experience
  //             </label>
  //             <input
  //               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  //               id="grid-zip"
  //               type="number"
  //               defaultValue="25"
  //             />
  //           </div>
  //           {renderQuestions()}
  //         <div class="w-full px-3 mt-4 md:w-1/3">
  //           <label
  //             class="block uppercase tracking-wide text-gray-700 text-xs mb-2"
  //             for="grid-password"
  //           >
  //             Add correct answer
  //           </label>

  //           <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  //             Add
  //           </button>
  //         </div>
  //       </div>
  //       </form>
  //       <div class="w-full px-3 mt-4 md:w-2/3">
  //           <label
  //             class="block uppercase tracking-wide text-gray-700 text-xs mb-2"
  //             for="grid-password"
  //           >
  //             Add incorrect answer
  //           </label>

  //           <button
  //             onClick={() => setQuestion(question + 1)}
  //             class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
  //           >
  //             Add
  //           </button>
  //         </div>
  //   </>
  // );
};

const mapStateToProps = (state) => {
  return {
    name: state.Activity.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (params) => dispatch(setName(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateLesson);
