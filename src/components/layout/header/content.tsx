import OwnerAvatar from "@/components/owner-avatar";

import Layout from "./layout";
import Links from "./menu";

const Content = () => (
  <Layout
    left={
      <div className="w-12">
        <OwnerAvatar sizes="100%" />
      </div>
    }
    center={<Links />}
  />
);

export default Content;
