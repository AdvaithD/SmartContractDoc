import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, styled, DarkTheme } from "baseui";

const engine = new Styletron();
const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  minHeight: "100vh"
});

const Index: React.FC = () => {
  return (
    <BaseProvider theme={DarkTheme}>
      <StyletronProvider value={engine}>
        <Centered>
          <App></App>
        </Centered>
      </StyletronProvider>
    </BaseProvider>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
