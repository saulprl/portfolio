import { Meta, StoryObj } from "@storybook/react";
import { FaGithub } from "react-icons/fa";

import { Button as ShadButton } from "@/components/ui/button";

const meta = {
  title: "UI/Button",
  component: ShadButton,
} satisfies Meta<typeof ShadButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Icon: Story = {
  args: {
    children: <FaGithub />,
    size: "icon",
  },
};
