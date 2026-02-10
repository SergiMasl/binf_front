import React from "react";
import "../styles/sequence_comparisons.sass";

export default function sequence_comparisons() {
  return (
    <div className="sequence_comparisons-wrap">
      <h1 className="seq-title">Sequence Comparisons</h1>
      <div className="seq-wrap">
        <label for="user-input">Enter Seq 1:</label>
        <textarea
          className="seq-text-area"
          id="user-input"
          rows="4"
          cols="50"
          placeholder="Type here..."
        ></textarea>
        <label for="user-input">Enter Seq 2:</label>
        <textarea
          className="seq-text-area"
          id="user-input"
          rows="4"
          cols="50"
          placeholder="Type here..."
        ></textarea>

        <div className="btm-seq-wrap">
          <button className="btm-seq" onclick="displayInput()">
            Get Value
          </button>
        </div>
      </div>
    </div>
  );
}
