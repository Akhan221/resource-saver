import React, { Component } from "react";
import { Progress } from "semantic-ui-react";

function Graph(props) {
  const lessThanAvg = props.value < 459.4; //change this to state average variable when we implement that
  return (
    <div className="graph">
      <h2> Personal </h2>
      <Progress
        progress="value"
        value={props.value}
        total={1000}
        color={lessThanAvg ? "green" : "red"} //if less than state avg then bar is green, else it's red.
        size="large"
      />
      <h2> State Average </h2>
      <Progress
        progress="value"
        value={459.4}
        total={1000}
        color="orange"
        size="large"
      />
      <h2> National Average </h2>
      <Progress
        progress="value"
        value={398.24}
        total={1000}
        color="blue"
        size="large"
      />
    </div>
  );
}

export default Graph;
