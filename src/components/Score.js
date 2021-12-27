import { Button } from "@material-ui/core";
import React from "react";
import "./Style.css";

const Score = ({score}) => {
    return (
        <div className="scorecard">
            <span>Your Score is: {score} </span>
            <Button
                className="takeMeHome"
                variant="contained"
                color="primary"
                size="large"
                href="/"
            >
                Take Me to Homepage
            </Button>
        </div>
    );
}

export default Score;
