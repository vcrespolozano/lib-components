import { Meta, StoryFn } from "@storybook/react";
import { Input } from "@components/atoms/Input";
import readme from "./Input.md?raw";
import { useState } from "react";

// Metadatos sobre el componente
export default {
  title: "Components/atoms/Input", // Categoría y nombre
  component: Input,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Input>;

// Plantilla base
const Template: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <Input {...args} value={value} onChange={onChange} />;
};

// Variaciones de la plantilla
export const Default = Template.bind({});
Default.args = {
  name: "exampleInput",
  id: "exampleInput",
  placeholder: "Placeholder",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Label",
  name: "exampleInput",
  id: "exampleInput",
};

export const WithError = Template.bind({});
WithError.args = {
  name: "exampleInput",
  id: "exampleInput",
  placeholder: "Placeholder",
  errorMsg: "Error message",
};

export const WithLabelAndPlaceholder = Template.bind({});
WithLabelAndPlaceholder.args = {
  label: "Label",
  name: "exampleInput",
  id: "exampleInput",
  placeholder: "Placeholder",
};
