import Hero from "../components/home/Hero";
import BestDeals from "../components/home/BestDeals";
import AvailableMarinas from "../components/home/AvailableMarinas";
import LatestBlog from "../components/home/LatestBlog";

export default function Home() {
  return (
    <>
      <Hero />
      <BestDeals />
      <AvailableMarinas />
      <LatestBlog />
    </>
  );
}