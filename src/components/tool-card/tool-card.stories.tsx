import { Meta, StoryObj } from "@storybook/react";
import { FaReact } from "react-icons/fa6";

import { ToolCard, ToolIcon, ToolTitle } from "./tool-card";

const meta = {
  title: "UI/Tool Card",
  component: ToolCard,
  decorators: [
    (Story) => (
      <div className="flex w-52 min-w-fit">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ToolCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <ToolIcon>
          <FaReact />
        </ToolIcon>
        <ToolTitle>React</ToolTitle>
      </>
    ),
  },
};
