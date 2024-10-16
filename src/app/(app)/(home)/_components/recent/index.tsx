import GitHubCalendar from "react-github-calendar";

import InView from "@/components/animation/in-view";
import config from "@data/config";

import Timeline from "./timeline";

import type { ReactNode } from "react";

const { githubUsername } = config;

const Activity = ({ title, children }: { title: string; children?: ReactNode }) => (
  <div className="flex flex-col space-y-8">
    <h3 className="text-xl font-medium">{title}</h3>
    <div className="overflow-auto">{children}</div>
  </div>
);

const Recent = () => (
  <InView
    variants={{
      hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    }}
    viewOptions={{ margin: "0px 0px -200px 0px" }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    <div className="mx-8 space-y-10 md:mx-16 lg:mx-32 xl:mx-40">
      <h2 className="text-2xl font-semibold">Recent Activities</h2>
      <div className="flex flex-wrap gap-x-8 gap-y-10 px-4 *:grow">
        <Activity title="Recent Posts">
          <Timeline />
        </Activity>
        <Activity title="GitHub Contributions">
          <GitHubCalendar username={githubUsername} />
        </Activity>
      </div>
    </div>
  </InView>
);

export default Recent;
