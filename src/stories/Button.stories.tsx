import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "../components";

const meta: Meta = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
    color: {
      options: ["gray", "purple"],
      control: { type: "select" },
      description: "Color merupakan pilihan warna untuk button.",
    },
    outlined: {
      control: { type: "boolean" },
      description: "Outlined merupakan salah satu variant dari button ini",
    },
    size: {
      options: ["default", "large"],
      defaultValue: "default",
      control: { type: "radio" },
      description: "Size merupakan ukuran dari tinggi button dan ukuran font",
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Solid = Template.bind({});
export const Outlined = Template.bind({});
export const CustomSize = Template.bind({});

Solid.args = {
  color: "purple",
  children: "Masuk menggunakan Google",
};

Outlined.args = {
  outlined: "true",
  color: "gray",
  children: "Masuk menggunakan Github",
};
CustomSize.args = {
  color: "purple",
  children: "Masuk menggunakan Instagram",
  size: "large",
};
