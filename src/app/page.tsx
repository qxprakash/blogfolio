import Avatar from "@/components/Avatar";
import Workspace from "@/components/Workspace";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import FooterWrapper from "@/utils/FooterWrapper";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Avatar />
      <Workspace />
      <FooterWrapper />
    </>
  );
}
