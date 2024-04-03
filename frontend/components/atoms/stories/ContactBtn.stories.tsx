import React from "react";
import { Meta, Story } from "@storybook/react";
import ContactBtn from "../ContactBtn";

export default {
  title: "Components/Atoms/ContactBtn",
  component: ContactBtn,
  tags: ["autodocs"],
} as Meta;

const Template: Story = () => <ContactBtn />;

export const Default = Template.bind({});