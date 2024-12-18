import { Meta, StoryFn } from "@storybook/react";
import { Card } from "@components/Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => (
  <div className="sandbox">
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
  shadow: true,
  rounded: true,
};
