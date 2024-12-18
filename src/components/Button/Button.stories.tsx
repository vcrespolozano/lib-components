import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@components/Button";

// Metadatos sobre el componente
export default {
  title: "Components/Button", // Categoría y nombre
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

// Plantilla base
const Template: StoryFn<typeof Button> = (args) => (
  <div className="sandbox">
    <Button {...args} />
  </div>
);

// Variaciones de la plantilla
export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
};
