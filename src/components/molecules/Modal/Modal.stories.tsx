import { Meta, StoryFn } from "@storybook/react";
import { Modal } from "@components/molecules/Modal";
import readme from "./Modal.md?raw";
import { useState } from "react";
import { Button } from "@components/atoms/Button";

// Metadatos sobre el componente
export default {
  title: "Components/molecules/Modal", // Categoría y nombre
  component: Modal,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Modal>;

// Plantilla base
const Template: StoryFn<typeof Modal> = (args) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="sandbox">
      <Button label="Show Modal" onClick={() => setVisible(true)} />
      <Modal {...args} visible={visible} onClose={() => setVisible(false)} />
    </div>
  );
};

// Variaciones de la plantilla
export const Default = Template.bind({});
Default.args = {
  title: "Default Modal",
  description:
    "Sit do mollit incididunt ut eu incididunt dolore officia dolor laborum anim et pariatur mollit. Pariatur sint occaecat voluptate consequat irure est. Dolore commodo sunt sunt incididunt ullamco ea amet irure. Pariatur mollit qui qui pariatur adipisicing mollit eiusmod elit ullamco. Occaecat quis ipsum est mollit. In magna aliqua laborum fugiat qui ex commodo.",
};
