import Layout from "./layout";
import OwnerAvatar from "@/components/owner-avatar";
import Links from "./menu";

const Content = () => (
  <Layout
    left={
      <div className="w-12">
        <OwnerAvatar />
      </div>
    }
    center={<Links />}
  />
);

export default Content;
