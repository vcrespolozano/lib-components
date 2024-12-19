import { Meta, StoryFn } from "@storybook/react";
import { Text } from "@components/atoms/Text";
import readme from "./Text.md?raw";

export default {
  title: "Components/atoms/Text",
  component: Text,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "Example text",
};

export const WithProps = Template.bind({});
WithProps.args = {
  value: "Example text",
  size: "size_bigTitle",
  weight: "weight_medium",
  kind: "PARAGRAPH",
  display: "display_inline",
  align: "align_center",
  color: "color_main",
  marginBottom: "2rem",
  marginTop: "2rem",
};
