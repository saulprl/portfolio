import { Meta, StoryObj } from "@storybook/react";

import { SocialLink } from "./social-link";

const meta = {
  title: "UI/Social link",
  component: SocialLink,
} satisfies Meta<typeof SocialLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "github",
  },
};
