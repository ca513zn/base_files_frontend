import React, { useEffect } from "react";
import treasure_chest from "../../assets/icons/chest.svg";
import diamond from "../../assets/icons/diamond.svg";
import brain from "../../assets/icons/brain.svg";
const axios = require("axios");

const Lessons = () => {
  useEffect(() => {
    async function fetchLessons() {
      try {
        const response = await axios.get("http://localhost:3333/test");
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLessons();
  });
  const lessons = [
    {
      id: "001",
      name: "Workplace Vocabulary Review - Level 1",
      gold: 100,
      diamonds: 0,
      exp: 20,
    },
  ];

  const loadDescription = (id) => {
    alert(id);
  };

  const renderLessons = () => {
    let lessonsArray = [];
    lessons.forEach((lesson) => {
      lessonsArray.push(
        <div
          className="Lessons-block"
          onClick={() => loadDescription(lesson.id)}
        >
          <div className="Lessons-block-title">{lesson.name}</div>
          {/* <div className="Lessons-block-footer">
            <div>
              <img
                className="Lessons-block-icon"
                src={treasure_chest}
                alt="gold"
              />
              {lesson.gold}
            </div>
            <div>
              <img className="Lessons-block-icon" src={diamond} alt="diamond" />
              {lesson.diamonds}
            </div>
            <div>
              <img className="Lessons-block-icon" src={brain} alt="brain" />
              {lesson.exp}
            </div>
          </div> */}
        </div>
      );
    });
    return lessonsArray;
  };
  return (
    <div className="Lessons-wrapper">
      <div className="Lessons-list">{renderLessons()}</div>
      <div className="Lessons-description">Section 2</div>
    </div>
  );
};

export default Lessons;
