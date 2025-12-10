import type { Meta, StoryObj } from "@storybook/react";

import Button from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "دکمه مبتنی بر Base UI با واریانت‌های ظاهری و رنگی مختلف. می‌توانید اندازه، مربع بودن، گرد بودن و تمام‌عرض بودن را کنترل کنید.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["unstyled", "fill", "outline", "soft", "ghost", "float"],
      mapping: { unstyled: undefined },
      labels: { unstyled: "بدون استایل" },
    },
    color: {
      control: { type: "select" },
      options: [
        "unstyled",
        "foreground",
        "background",
        "primary",
        "secondary",
        "error",
        "warning",
        "success",
        "info",
      ],
      mapping: { unstyled: undefined },
      labels: { unstyled: "بدون استایل" },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "lg"],
    },
    isSquare: { control: "boolean" },
    isRounded: { control: "boolean" },
    isFull: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    children: "دکمه",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};