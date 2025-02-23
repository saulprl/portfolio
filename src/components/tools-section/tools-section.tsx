import {
  SiExpo,
  SiExpress,
  SiFlutter,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiRemix,
  SiVisualstudiocode,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";

import { Section } from "../section/section";
import { ToolCard, ToolIcon, ToolTitle } from "../tool-card/tool-card";
import { FaGitAlt, FaReact } from "react-icons/fa6";

export const ToolsSection = () => {
  return (
    <Section className="md:grid-cols-3">
      <ToolCard>
        <ToolIcon>
          <FaReact />
        </ToolIcon>
        <ToolTitle>React</ToolTitle>
      </ToolCard>
      <ToolCard>
        <ToolIcon>
          <FaReact />
        </ToolIcon>
        <ToolTitle>React Native</ToolTitle>
      </ToolCard>
      <ToolCard>
        <ToolIcon>
          <SiFlutter />
        </ToolIcon>
        <ToolTitle>Flutter</ToolTitle>
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
          <SiExpo />
        </ToolIcon>
        <ToolTitle>Expo</ToolTitle>
      </ToolCard>
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
          <SiVuedotjs />
        </ToolIcon>
        <ToolTitle>Vue.js</ToolTitle>
      </ToolCard>
      <ToolCard>
        <ToolIcon>
          <SiNestjs />
        </ToolIcon>
        <ToolTitle>Nest.js</ToolTitle>
      </ToolCard>
      <ToolCard>
        <ToolIcon>
          <SiExpress />
        </ToolIcon>
        <ToolTitle>Express</ToolTitle>
      </ToolCard>
      {/* <ToolCard>
        <ToolIcon>
          <SiPostgresql />
        </ToolIcon>
        <ToolTitle>PostgreSQL</ToolTitle>
      </ToolCard> */}
    </Section>
  );
};
