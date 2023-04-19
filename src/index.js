// React17のアップデートでJSXを使用するだけの場合、Reactのimportは必須ではなくなった
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));
