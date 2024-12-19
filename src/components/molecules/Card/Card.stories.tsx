import { Meta, StoryFn } from "@storybook/react";
import { Card } from "@components/molecules/Card";
import readme from "./Card.md?raw";

export default {
  title: "Components/molecules/Card",
  component: Card,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
  shadow: true,
  rounded: true,
};

export const WithButton = Template.bind({});
WithButton.args = {
  title: "With Button",
  description: "Description",
  shadow: true,
  rounded: true,
  buttonOnClick: () => alert("Button Clicked"),
  buttonLabel: "Button",
};
