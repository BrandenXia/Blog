import Hero from "./_components/hero";

export const metadata = {
  title: "Home",
};

const Page = () => (
  <main>
    <Hero />
    <div className="h-[9999px]" />
  </main>
);

export default Page;
