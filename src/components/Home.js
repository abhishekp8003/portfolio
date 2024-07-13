import home_img from "../assets/bg22.gif";
// import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import InstagramIcon from "@mui/icons-material/Instagram";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import { Triangle } from "react-loader-spinner";

const Name = () => {
  return (
    <div
      className="text-center text-[#f0f0f0] absolute -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 max-md:w-full max-sm:m-auto"
      style={{ fontFamily: "Poppins,sans-serif" }}
    >
      <h1 className="font-extrabold text-6xl pb-8 max-sm:text-4xl">
        Abhishek Patil
      </h1>
      <h1 className="md:flex md:flex-row text-4xl md:ml-14 font-semibold max-md:text-3xl">
        <span className="">I'm a </span>
        <span className="ml-2 text-[#009e66]">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Data Engineer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Full Stack Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Problem Solver")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
            }}
          />
        </span>
      </h1>
    </div>
  );
};

const Home = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 800);
  }, []);

  return (
    <div className="bg-[#111] text-center w-full h-screen flex justify-center items-center">
      {loader ? (
        <Triangle
          height="100"
          width="100"
          color="#009e66"
          ariaLabel="triangle-loading"
          wrapperStyle={{ position: "absolute", top: "45%" }}
          // wrapperClassName=""
          visible={loader}
        />
      ) : (
        <div
          className="w-full h-full"
          style={{
            position: "fixed",
            backgroundImage: `url(${home_img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <Navbar />
          <Name />
          <div className="absolute bottom-6 lg:right-9 lg:w-auto max-sm:flex max-sm:justify-center">
            <ul className="flex lg:flex-col max-sm:flex-row max-sm:justify-evenly max-sm:w-screen sm:flex-row sm:justify-evenly sm:w-screen md:flex-row md:justify-evenly md:w-screen lg:w-auto">
              <Link to="https://www.linkedin.com/in/abhipatil96/">
                <LinkedInIcon
                  sx={{ color: "white", fontSize: "25px" }}
                  className="lg:m-3 hover:text-[#0A66C2] hover:scale-125 hover:transition-all"
                />
              </Link>
              <Link to="https://github.com/abhishekp8003">
                <GitHubIcon
                  sx={{ color: "white", fontSize: "25px" }}
                  className="lg:m-3 hover:scale-125 hover:transition-all"
                />
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;