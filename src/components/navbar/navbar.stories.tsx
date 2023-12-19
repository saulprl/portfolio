import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./navbar";

const meta = {
  title: "UI/Navbar",
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    orientation: "horizontal",
  },
};
