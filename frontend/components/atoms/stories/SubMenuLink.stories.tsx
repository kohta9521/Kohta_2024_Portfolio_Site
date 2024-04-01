import { Meta, StoryObj } from "@storybook/react";

import SubMenuLink from "../SubMenuLink";

const meta: Meta = {
  title: "Components/Atoms/SubMenuLink",
  component: SubMenuLink,
  tags: ["autodocs"],
  argTypes: {
    id: {
      description: "key設定用",
      defaultValue: 1,
      control: {
        type: "number",
      },
    },
    title: {
      description: "タイトル",
      control: {
        type: "text",
      },
    },
    link: {
      description: "リンク先",
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type SubMenuLink = StoryObj<typeof SubMenuLink>;

export const Default: SubMenuLink = {
  args: {
    id: 1,
    title: "Home",
    link: "/",
  },
};
