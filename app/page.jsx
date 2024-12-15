import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// importing components
import Social from "@/components/Social";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span>Karthik Durai</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Software Developer specialized in Full Stack Development and Cloud
              Technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                {/* Adding Social Links icom component */}
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-12 h-12 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
                />
              </div>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
