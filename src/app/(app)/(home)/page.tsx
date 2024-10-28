import Hero from "./_components/hero";
import Recent from "./_components/recent";

const metadata = {
  title: "Home",
};

const Page = () => (
  <main className="mb-36 space-y-36">
    <Hero />
    <Recent />
  </main>
);

export default Page;
export { metadata };
