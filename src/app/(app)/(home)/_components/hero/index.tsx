import OwnerAvatar from "@/components/owner-avatar";
import Intro from "@data/intro";

import Layout from "./layout";

const Hero = () => (
  <Layout>
    <div className="xs:text-2xl mx-5 justify-center text-3xl sm:text-4xl md:justify-start">
      <Intro />
    </div>
    <div className="row-start-1 mx-5 justify-center md:row-auto md:mx-0 md:justify-end">
      <div className="w-52 xl:w-64">
        <OwnerAvatar className="mask-circle" sizes="100%" />
      </div>
    </div>
  </Layout>
);
export default Hero;
