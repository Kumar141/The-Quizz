import React, { useEffect, useState } from "react";
import "./Style.css";
import Error from "./Error";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Score from "./Score";

const Question = ({
    currQuestionNumber,
    setCurrQuestionNumber,
    setScore,
    options,
    currQuestion,
    corretOption,
}) => {
    const [selectedOption, setSelectedOption] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("cooptions", corretOption);
    }, []);

    const setSelect = (option) => {
        setSelectedOption(option);
        if (option === corretOption) {
            setScore((prevScore) => prevScore + 1);
        }
        setError(false);
    };

    const handleClassName = (option) => {
        console.log(option + " <---> " + corretOption);
        if (option === corretOption) {
            console.log("rightAnswer");
            return "rightAnswer";
        } else if (selectedOption === option && option !== corretOption) {
            console.log("wrongAnswer");
            return "wrongAnswer";
        }
    };

    const handleQuit = () => {};

    const handleNext = () => {
        if (currQuestionNumber > 8) {
            navigate("/score");
            setSelectedOption();
        } else if (selectedOption) {
            setSelectedOption();
            setCurrQuestionNumber((prev) => prev + 1);
        } else {
            setError("Please select an option first");
        }
    };

    return (
        <div className="question">
            <h1>Question {currQuestionNumber + 1}</h1>
            <div className="questionStart">
                <h2>{currQuestion}</h2>
                    <h4>{error && <Error>{error}</Error>}</h4>
                <div className="questionOptions">
                    {options.map((option) => {
                        return (
                            <button
                                key={option}
                                onClick={() => setSelect(option)}
                                className={`singleOption ${
                                    selectedOption && handleClassName(option)
                                }`}
                                disabled={selectedOption}
                            >
                                {option}
                            </button>
                        );
                    })}
                    <div className="controlButtons">
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            href="/"
                            onClick={handleQuit}
                        >
                            Quit
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleNext}
                        >
                            Next Question
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
