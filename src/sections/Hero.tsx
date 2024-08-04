import Button from "@/components/Button";
import starBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="h-[492px] flex items-center"
      style={{ backgroundImage: `url(${starBg.src})` }}
    >
      <div className="absolute h-64 w-64 bg-hero bg-cover rounded-full border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  shadow-[20px_-20px_50px_rgb(255_255_255/0.5),-20px_-20px_80px_rgb(255_255_255/0.1),0_0_50px_rgb(140_69_255)]"></div>
      {/* <div className="absoulte h-[344px] w-[344px] rounded-full border top-1/2 left-1/2"></div> */}
      <div className="container relative">
        <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Hi There
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center">
          Your Friendly Neighbourhood Developer. I build things for browsers and
          servers , and sometimes for my SBC
        </p>
        <div className="flex justify-center mt-5">
          <Button>Get In Touch</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
