import { Meta, StoryFn } from "@storybook/react";
import { Link } from "@components/atoms/Link";
import readme from "./Link.md?raw";

export default {
  title: "Components/atoms/Link",
  component: Link,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Link>;

const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert("Link clicked"),
  children: "Click me",
};
