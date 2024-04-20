import { Meta, StoryObj } from "@storybook/react";

import SectionTitle, { SectionTitleProps } from "../SectionTitle";

const meta: Meta = {
  title: "Components/Molecules/SectionTitle",
  component: SectionTitle,
  tags: ["autodocs"],
  argTypes: {
    key: {
      description: "key用の番号",
      control: {
        type: "number",
      },
    },
    id: {
      description: "id用の文字列",
      control: {
        type: "text",
      },
    },
    title: {
      description: "タイトル",
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type SectionTitle = StoryObj<typeof SectionTitle>;

export const Default: SectionTitle = {
  args: {
    key: 1,
    id: "#recent",
    jaTitle: "Recent My Works",
    enTitle: "Recent My Works",
  },
};
