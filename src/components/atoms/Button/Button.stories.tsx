import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@components/atoms/Button";
import readme from "./Button.md?raw";

// Metadatos sobre el componente
export default {
  title: "Components/atoms/Button", // Categoría y nombre
  component: Button,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Button>;

// Plantilla base
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// Variaciones de la plantilla
export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
};
