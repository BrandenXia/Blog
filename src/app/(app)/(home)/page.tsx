import Hero from "./_components/hero";
import Recent from "./_components/recent";

const metadata = {
  title: "Home",
};

const Page = () => (
  <main className="space-y-36">
    <Hero />
    <Recent />
    <div className="h-[9999px]" />
  </main>
);

export default Page;
export { metadata };
