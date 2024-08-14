import Avatar from "@/components/Avatar";
import Projects from "@/components/Projects";
import Workspace from "@/components/Workspace";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import FooterWrapper from "@/utils/FooterWrapper";
import { FaUser } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";
import { LuContainer } from "react-icons/lu";
import { FaStackOverflow } from "react-icons/fa";





export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Avatar icon={FaUser}/>
      <Workspace />
      <Avatar icon={LuContainer} marginTop="mt-4"/>
      <Projects />
      <Avatar icon={FaStackOverflow} marginTop="mt-8" />
      <FooterWrapper />
    </>
  );
}
