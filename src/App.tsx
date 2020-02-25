import React from "react";
import sample_abi from "./sample_abi.json";
import { Accordion, Panel } from "baseui/accordion";
import { Tag, VARIANT, KIND } from "baseui/tag";

const App: React.FC = () => {
  return (
    <Accordion onChange={d => console.log(d)}>
      {Object.values(sample_abi).map(d => (
        <Panel title={d.name}>
          <h3>Name: {d.name}</h3>
          <Tag
            closeable={false}
            variant={VARIANT.solid}
            kind={d.payable ? KIND.negative : undefined}
          >
            {d.payable ? "Payable" : "Not Payable"}
          </Tag>
        </Panel>
      ))}
    </Accordion>
  );
};

export default App;
