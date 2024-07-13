import CloseIcon from "@mui/icons-material/Close";
import HubIcon from "@mui/icons-material/Hub";
import MapIcon from "@mui/icons-material/Map";
import CallIcon from "@mui/icons-material/Call";
import SendIcon from "@mui/icons-material/Send";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9b99sf5",
        "template_594c6kq",
        form.current,
        "Kp6swkjlZdFNm3MW1"
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          alert("thank you for sending mail");
        },
        (error) => {
          console.error('There was an error sending the email:', error);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <div className="text-white animate-fade" style={{ fontFamily: "Poppins,sans-serif" }}>
      <div className="absolute right-14 top-7 max-md:right-6 max-md:top-4">
        <button
          onClick={backHome}
          className="after:border-2 after:border-[#009e66] after:w-4/5 after:h-4/5 after:animate-ping after:ease-out after:absolute after:rounded-full after:right-1 after:top-1"
        >
          <CloseIcon sx={{ fontSize: "38px", color: "#009e66" }} />
        </button>
      </div>
      <div className="flex align-middle justify-center flex-col">
        <div className="m-auto p-20 text-center">
          <h1 className="text-4xl pt-6">Contact Me</h1>
        </div>
        <div className="w-3/4 flex m-auto justify-center max-md:flex-col max-md:mb-5">
          <div className="md:px-12 lg:w-2/4 lg:pl-5 lg:pr-10 rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold text-2xl">Send us a message</h1>
              <form ref={form} onSubmit={sendEmail} className="w-full pt-6">
                <div className="grid grid-cols-1 gap-6">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className="p-2 rounded text-black"
                    style={{ backgroundColor: "white", border: "1px solid #ccc" }}
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="p-2 rounded text-black"
                    style={{ backgroundColor: "white", border: "1px solid #ccc" }}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="p-2 rounded text-black"
                    style={{ backgroundColor: "white", border: "1px solid #ccc" }}
                    required
                  ></textarea>
                </div>
                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#009e66] text-white rounded"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="md:px-12 lg:w-2/4 lg:pl-5 lg:pr-10 rounded-2xl shadow-2xl">
            <ul className="p-6">
              <li>
                <div className="flex pl-2">
                  <span className="pt-2 pr-8">
                    <HubIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                  </span>
                  <div className="border-l pl-8 pt-2">
                    <h6>Name</h6>
                    <span className="text-[#9f9f9f]">Abhishek Patil</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex pl-2">
                  <span className="pt-4 pr-8">
                    <MapIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                  </span>
                  <div className="border-l pl-8 pt-4">
                    <h6>Location</h6>
                    <span className="text-[#9f9f9f]">
                      Pune, India
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex pl-2">
                  <span className="pt-4 pr-8">
                    <CallIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                  </span>
                  <div className="border-l pl-8 pt-4">
                    <h6>Call Me</h6>
                    <span className="text-[#9f9f9f]">
                      <a href="tel:9028348003">+91 9028348003</a>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex pl-2 ">
                  <span className="pt-4 pr-8">
                    <SendIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                  </span>
                  <div className="border-l pl-8 pt-4 max-sm:break-all">
                    <h6>Email Me</h6>
                    <span className="text-[#9f9f9f]">
                      <a href="mailto:AbhiPatil96@protonmail.com">
                        abhipatil97@proton.me
                      </a>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
