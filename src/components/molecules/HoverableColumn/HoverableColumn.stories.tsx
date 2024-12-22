import { Meta, StoryFn } from "@storybook/react";
import { HoverableColumn } from "@components/molecules/HoverableColumn";
import readme from "./HoverableColumn.md?raw";
import { FaReact } from "react-icons/fa";

export default {
  title: "Components/molecules/HoverableColumn",
  component: HoverableColumn,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof HoverableColumn>;

const Template: StoryFn<typeof HoverableColumn> = (args) => (
  <HoverableColumn {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description:
    "Occaecat amet cillum ipsum eu cillum est qui laboris mollit. Proident sint fugiat nulla sit dolore. Eiusmod sunt laboris deserunt ex ex ea proident labore do eiusmod eiusmod. Sint esse nulla enim ut esse laboris. Eiusmod elit voluptate ex id enim aliqua nisi ullamco fugiat mollit adipisicing id culpa.",
  icon: <FaReact size={36} />,
  align: "left",
};
