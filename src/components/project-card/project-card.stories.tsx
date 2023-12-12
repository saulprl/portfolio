/* eslint-disable @next/next/no-img-element */
import { Meta, StoryObj } from "@storybook/react";

import {
  ProjectCard,
  ProjectCardContent,
  ProjectCardFooter,
} from "@/components/project-card/project-card";
import { CardContent, CardDescription, CardTitle } from "../ui/card";

const meta = {
  title: "UI/Project Card",
  component: ProjectCard,
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <ProjectCardContent>
          <img
            src="https://placehold.co/400x400.png"
            alt="Project 1"
            className="fit-cover"
          />
        </ProjectCardContent>
        <ProjectCardFooter>
          <CardTitle>Project title</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            obcaecati consequatur commodi veniam eum
          </CardDescription>
        </ProjectCardFooter>
      </>
    ),
  },
};
