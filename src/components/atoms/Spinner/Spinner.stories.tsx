import { Meta, StoryFn } from "@storybook/react";
import { Spinner } from "@components/atoms/Spinner";
import readme from "./Spinner.md?raw";

// Metadatos sobre el componente
export default {
  title: "Components/atoms/Spinner", // Categoría y nombre
  component: Spinner,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Spinner>;

// Plantilla base
const Template: StoryFn<typeof Spinner> = (args) => <Spinner />;

// Variaciones de la plantilla
export const Default = Template.bind({});
Default.args = {};
