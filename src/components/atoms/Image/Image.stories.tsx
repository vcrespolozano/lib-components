import { Meta, StoryFn } from "@storybook/react";
import { Image } from "@components/atoms/Image";
import readme from "./Image.md?raw";

// Metadatos sobre el componente
export default {
  title: "Components/atoms/Image", // Categoría y nombre
  component: Image,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Image>;

// Plantilla base
const Template: StoryFn<typeof Image> = (args) => <Image {...args} />;

// Variaciones de la plantilla
export const Default = Template.bind({});
Default.args = {
  src: "/img/example.jpg",
  loading: true,
  lazyLoad: true,
  alt: "Example image",
  width: 512,
  height: 512,
  objectFit: "cover",
};
