import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, Link } from "react-router-dom";
import about_img from "../assets/abhi.jpg";
import DownloadIcon from '@mui/icons-material/Download';

const About = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <div
      className="text-white box-border animate-fade"
      style={{ fontFamily: "Poppins,sans-serif" }}
    >
      <div className="absolute right-14 top-7 max-md:right-6 max-md:top-4 ">
        <button
          onClick={backHome}
          className="after:border-2 after:border-[#009e66] after:w-4/5 after:h-4/5 after:animate-ping after:ease-out after:absolute after:rounded-full after:right-1 after:top-1"
        >
          <CloseIcon sx={{ fontSize: "38px", color: "#009e66" }} />
        </button>
      </div>
      <div className="flex align-middle justify-center flex-col">
        <div className="m-auto p-20">
          <p className="text-thin text-[#9f9f9f]">Get to Know About Me</p>
          <h1 className=" text-5xl">About</h1>
        </div>
        <div className="lg:w-3/4 max-md:w-full flex m-auto sm:max-lg:flex-col sm:max-lg:text-center sm:max-lg:p-auto max-md:flex-col max-md:text-center max-md:p-auto">
          <img
            src={about_img}
            className="border-4 border-green-700 rounded-full w-50 h-50"
            alt="Abhishe Patil"
          />

          <div className="ml-14 max-md:ml-0">
            <div className="p-5 ">
              <h1 className="text-[#009e66] text-2xl p-2 -mt-5 sm:max-lg:mr-10">
                What I Do?
              </h1>
              <h1 className="text-3xl font-bold p-3 max-md:text-xl">
                I'm Abhishek Patil, Data Engineer and Full Stack Developer
              </h1>
              <p className="text-[#9f9f9f] p-2 text-sm">
                I bring over 2.5 years of experience as a Data Engineer at Cognizant Technology Solutions, where I specialized in building and maintaining robust data solutions.
                 Additionally, I have 1.5 years of experience in web development as a freelancer, creating engaging and functional websites.
                 I hold a degree in Computer Science from Pune University, where I developed a strong foundation in various technology domains and critical problem-solving skills.
              </p>
              <hr className="text-[#9f9f9f] mt-6" />
            </div>
            <div className="flex flex-col max-md:ml-5">
              <div className="flex max-md:flex-col max-md:p-0 p-2 ">
                <div className="flex pl-4 max-md:pl-0">
                  <span>Name:</span>
                  <p className="pl-2 text-[#9f9f9f]">Abhishek Patil</p>
                </div>
                <div className="flex pl-40 max-md:pl-0">
                  <span>Email:</span>
                  <p className="pl-2 text-[#009e66] hover:text-[#346b57] cursor-pointer">
                    <a href="mailto:tusharsahani000@gmail.com">
                      AbhiPatil96@protonmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex max-md:flex-col  max-md:p-0 p-2">
                <div className="flex max-md:pl-0 pl-4">
                  <span>Age:</span>
                  <p className="pl-2 text-[#9f9f9f]">26</p>
                </div>
                <div className="flex pl-[283px] max-md:pl-0">
                  <span>Live: </span>
                  <p className="pl-2 text-[#9f9f9f]">Pune , India</p>
                </div>
              </div>
            </div>
            <div>
              {/* <button class="mt-2 ml-5 bg-[#009e66] hover:bg-[#0e522b] text-white font-bold py-2 px-4 rounded-full mb-3">
                <Link to="https://drive.google.com/drive/folders/1KbXIi0xJ9-uUTEli0MGzvy8C_aC_O-2_?usp=sharing" target="_blank">
                <DownloadIcon sx={{ fontSize: "20px" }} className="animate-bounce mr-1 text-sm"/> Portfolio
                </Link>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
