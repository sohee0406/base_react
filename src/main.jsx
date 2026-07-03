import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Day01 from "./pages/day01/Day01";
// import Day02 from "./pages/day02/Day02";
import "./pages/day03/css/index.css";
import BaseEx from "./pages/day03/components/BaseEx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* {jsx 문법} */}
    {/* {jsx 규칙} */}
    {/* <Day02 /> */}
    <BaseEx />
  </StrictMode>,
);
