import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import CourseInfo from "./courseinfo/App";
import Unicafe from "./unicafe/App";
import Anecdotes from "./anecdotes/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Unicafe />)
// root.render(<CourseInfo />)
root.render(<Anecdotes />)
