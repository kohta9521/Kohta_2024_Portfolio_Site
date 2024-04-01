import { Meta, StoryObj } from "@storybook/react";
import MainMenuLink from "../MainMenuLink";

const meta: Meta = {
  title: "Components/Atoms/MainMenuLink",
  component: MainMenuLink,
  tags: ["autodocs"],
  argTypes: {
    id: {
      description: "key設定用",
      defaultValue: 1,
      control: {
        type: "number",
      },
    },
    number: {
      description: "ナンバー",
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
    link: {
      description: "リンク先",
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type MainMenuLink = StoryObj<typeof MainMenuLink>;

export const Default: MainMenuLink = {
  args: {
    id: 1,
    number: "01",
    title: "Home",
    link: "/",
  },
};
