import { Meta, StoryObj } from "@storybook/react";
import { Contact } from "./contact";

const meta = {
  title: "UI/Contact",
  component: Contact,
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
