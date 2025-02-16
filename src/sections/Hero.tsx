import starBg from "@/assets/stars.png";
import avatarImage from "@/assets/avatar_image.webp";
import hiEmoticon from "@/assets/blob-wave.gif";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { socials } from "@/utils/constants";

export const Hero = () => {
  return (
    <section
      className="h-[492px] flex flex-col items-center"
      style={{ backgroundImage: `url(${starBg.src})` }}
    >
      <div
        className="min-h-48 min-w-48 rounded-full mt-12 bg-cover border-white/20 shadow-[20px_-20px_50px_rgb(255_255_255/0.5),-20px_-20px_80px_rgb(255_255_255/0.1),0_0_50px_rgb(140_69_255)] animate-smoothRandomGlow"
        style={{ backgroundImage: `url(${avatarImage.src})` }}
      ></div>

      <div className="container">
        <h1 className="text-4xl font-semibold tracking-tighter mt-4  bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Hi There, <br /> I&apos;m Prakash {"  "}
          <Image
            className="inline mb-1"
            src={hiEmoticon.src}
            alt="Hi Emoticon"
            width={32} // 32px corresponds to the 'w-8' Tailwind class
            height={32} // Same height as width to maintain aspect ratio
          />
        </h1>
        <p className="text-lg md:w-1/2 mx-auto text-wrap text-white/70 mt-5 text-center">
          Your Friendly Neighbourhood Developer. I build things for browsers and
          servers, and sometimes for my SBC.
        </p>
        <div className="flex justify-center mt-5">
          {/* <Button>Get In Touch</Button> */}
        </div>
        <div className="flex items-center space-x-2 justify-center">
          <a
            href={socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center mt-5"
          >
            <FaTwitter className="text-2xl mr-2" />
          </a>

          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center mt-5"
          >
            <FaGithub className="text-2xl mr-2" />
          </a>

          <a
            href={`mailto:${socials.github}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center mt-5"
          >
            <BiLogoGmail className="text-2xl mr-2" />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center mt-5"
          >
            <FaLinkedin className="text-2xl mr-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
