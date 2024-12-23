import { Meta, StoryFn } from "@storybook/react";
import { Toast } from "@components/atoms/Toast";
import readme from "./Toast.md?raw";
import { useState } from "react";
import { Button } from "@components/atoms/Button";

// Metadatos sobre el componente
export default {
  title: "Components/atoms/Toast", // Categoría y nombre
  component: Toast,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Toast>;

// Plantilla base
const Template: StoryFn<typeof Toast> = () => {
  const [toastDesc, setToastDesc] = useState<string>("");

  return (
    <div>
      <Button
        label="Show Toast"
        onClick={() => setToastDesc("Example toast")}
      />
      {toastDesc && (
        <Toast description={toastDesc} onClose={() => setToastDesc("")} />
      )}
    </div>
  );
};

// Variaciones de la plantilla
export const Default = Template.bind({});
Default.args = {};
