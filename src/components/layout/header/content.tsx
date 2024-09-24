import Layout from "./layout";
import OwnerAvatar from "@/components/owner-avatar";

const Content = () => (
  <Layout
    left={
      <div className="w-12">
        <OwnerAvatar />
      </div>
    }
  />
);

export default Content;
