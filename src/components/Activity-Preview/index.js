import React from 'react'
import './Mini-Safari.css'

const MiniSafari = () => {
    return (
        <div className="mini-safari-wrapper">
            <div className="mini-safari-header">
                <div className="mini-safari-button red" />
                <div className="mini-safari-button yellow" />
                <div className="mini-safari-button green" />
            </div>
            <div className="mini-safari-content-wrapper">
                <div className="flex-column-center">

                <div className="mini-safari-timer-bar">

                </div>
                <div className="mini-safari-timer">

                </div>
                <div>

                </div>
            </div>
            <div className="mini-safari-content">
                <div>
                Question 1:
                </div>
                <div>
                    How many bee's are there in the world?
                </div>
                <div>
                    Your answer: Cause you gay bro
                </div>
                <div className="question-options">
                    <div className="question-options-option"
                    // onMouseEnter={() => alert('sup tho')}
                    onMouseLeave={() => alert('he left')}
                    >A</div>
                    <div className="question-options-option" >B</div>
                    <div className="question-options-option" >C</div>
                    <div className="question-options-option" >D</div>
                </div>
            </div>
                </div>
        </div>
    )
}

export default MiniSafari