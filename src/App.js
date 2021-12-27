import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Questions from "./components/Questions";
import Score from "./components/Score";

const App = () => {
    const [name, setName] = useState("");
    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0);

    const getQuestions = async (category, difficulty) => {
        await fetch(
            `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
        )
            .then((res) => res.json())
            .then((response) => {
                // console.log("before", questions);
                setQuestions(response.results);
                // console.log("after", questions);
            })
            .catch((error) => console.log("got error", error));
    };

    return (
        <BrowserRouter>
            <div className="App">
                <Header />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                name={name}
                                setName={setName}
                                getQuestions={getQuestions}
                            />
                        }
                    />
                    <Route
                        path="/questions"
                        element={
                            <Questions
                                name={name}
                                questions={questions}
                                score={score}
                                setScore={setScore}
                            />
                        }
                    />
                    <Route path="/score" element={<Score score={score} />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
