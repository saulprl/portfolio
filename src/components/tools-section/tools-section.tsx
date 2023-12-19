import {
  SiExpo,
  SiFlutter,
  SiNextdotjs,
  SiRemix,
  SiVisualstudiocode,
  SiVite,
} from "react-icons/si";

import { Section } from "../section/section";
import { ToolCard, ToolIcon, ToolTitle } from "../tool-card/tool-card";
import { FaGitAlt, FaReact } from "react-icons/fa6";

export const ToolsSection = () => {
  return (
    <Section className="md:grid-cols-3">
      <ToolCard>
        <ToolIcon>
          <SiVisualstudiocode />
        </ToolIcon>
        <ToolTitle>Visual Studio Code</ToolTitle>
      </ToolCard>
      <ToolCard>
        <ToolIcon>
          <FaGitAlt />
        </ToolIcon>
        <ToolTitle>Git</ToolTitle>
      </ToolCard>
      <ToolCard>
        <ToolIcon>
          <FaReact />
        </ToolIcon>
        <ToolTitle>React</ToolTitle>
      </ToolCard>
      <ToolCard>
        <ToolIcon>
          <SiNextdotjs />
        </ToolIcon>
        <ToolTitle>Next.js</ToolTitle>
      </ToolCard>
      <ToolCard>
        <ToolIcon>
          <SiVite />
        </ToolIcon>
        <ToolTitle>Vite</ToolTitle>
      </ToolCard>
      <ToolCard>
        <ToolIcon>
          <SiRemix />
        </ToolIcon>
        <ToolTitle>Remix.run</ToolTitle>
      </ToolCard>
      <ToolCard>
        <ToolIcon>
          <FaReact />
        </ToolIcon>
        <ToolTitle>React Native</ToolTitle>
      </ToolCard>
      <ToolCard>
        <ToolIcon>
          <SiExpo />
        </ToolIcon>
        <ToolTitle>Expo</ToolTitle>
      </ToolCard>
      <ToolCard>
        <ToolIcon>
          <SiFlutter />
        </ToolIcon>
        <ToolTitle>Flutter</ToolTitle>
      </ToolCard>
    </Section>
  );
};
