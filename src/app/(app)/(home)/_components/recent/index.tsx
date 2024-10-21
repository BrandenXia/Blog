import GitHubCalendar from "react-github-calendar";

import InView from "@/components/animation/in-view";
import config from "@data/config";

import Activity from "./activity";
import Timeline from "./timeline";

const { githubUsername } = config;

const Recent = () => (
  <div className="mx-8 space-y-10 md:mx-16 lg:mx-32 xl:mx-40">
    <h2 className="text-2xl font-semibold">Recent Activities</h2>
    <InView
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.09,
          },
        },
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-wrap gap-x-8 gap-y-10 px-4 *:grow">
        <Activity title="Recent Posts">
          <Timeline />
        </Activity>
        <Activity title="GitHub Contributions">
          <GitHubCalendar username={githubUsername} />
        </Activity>
      </div>
    </InView>
  </div>
);

export default Recent;
