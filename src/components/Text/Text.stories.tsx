import { Meta, StoryFn } from "@storybook/react";
import { Text } from "@components/Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {},
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => (
  <div className="sandbox">
    <Text {...args} />
  </div>
);

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
