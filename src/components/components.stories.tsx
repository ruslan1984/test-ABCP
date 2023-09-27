import React from "react";
import Btn from "./Button";
// import { action } from "@storybook/addon-actions";
// import { withKnobs, text } from "@storybook/addon-knobs";
import { withActions, action } from "@storybook/addon-actions";

export default {
  title: "Elements",
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
};
const onClick = () => {
  //   console.log(1);
  //   action("11");
};
export const Button = () => {
  return <Btn onClick={onClick}>Button</Btn>;
};
