import React, { useState, useEffect } from "react";
import Question from "./Question";
import { CircularProgress } from "@material-ui/core";
import "./Style.css";

const Questions = ({ name, questions, score, setScore }) => {
    
    const [currQuestionNumber, setCurrQuestionNumber] = useState(0);
    const [options, setOptions] = useState([]);
    const correctOption = questions[currQuestionNumber]?.correct_answer;

    useEffect(() => {
        console.log("ques", questions);
        console.log("opts1", options);

        setOptions( questions && handleShuffle([
            questions[currQuestionNumber]?.correct_answer,
            ...questions[currQuestionNumber]?.incorrect_answers,
        ]));

        // setOptions(shuffledOptions);
        console.log("opts2", options);
    }, [currQuestionNumber]);

    const handleShuffle = (optionArray) => {
        return optionArray.sort(() => Math.random() - 0.5);
    };

    return (
        <div className="questionsPage">
            <h3>Hey There, <span className="playerName">{name}!</span></h3>
            <div className="categoryAndScore">
                <h5>{questions[currQuestionNumber].category}</h5>
                <h5>Score: <span>{ score }</span> </h5>
            </div>
            {questions ? (
                <Question
                    currQuestionNumber={currQuestionNumber}
                    setCurrQuestionNumber={setCurrQuestionNumber}
                    setScore={setScore}
                    options={options}
                    currQuestion={questions[currQuestionNumber].question}
                    corretOption={correctOption}
                />
            ) : (
                <CircularProgress />
            )}
        </div>
    );
};

export default Questions;
