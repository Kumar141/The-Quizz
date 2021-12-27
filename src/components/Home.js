import React, { useState } from "react";
import "./Style.css";
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";
import Error from "./Error";

const Home = ({ name, setName, getQuestions }) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        } else {
            setError(false);
            await getQuestions(category, difficulty);
            navigate("/questions");
        }
    };

    return (
        <div>
            <div className="Menu">
                <div className="options">
                    
                    {error && (
                        <Error>
                            Please Fill All The Fields
                        </Error>
                    )}

                    <TextField
                        className="box"
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        className="box"
                        select
                        label="Select Categories"
                        variant="outlined"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {Categories.map((item, i) => {
                            return (
                                <MenuItem key={item.value} value={item.value}>
                                    {item.category}
                                </MenuItem>
                            );
                        })}
                    </TextField>

                    <TextField
                        className="box"
                        select
                        label="Select Level"
                        variant="outlined"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <MenuItem key="easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="hard" value="hard">
                            Hard
                        </MenuItem>
                    </TextField>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>

                <img
                    className="bannerImg"
                    src={
                        require("../assests/undraw_book_lover_re_rwjy.svg")
                            .default
                    }
                    alt="quiz"
                />
            </div>
        </div>
    );
};

export default Home;
