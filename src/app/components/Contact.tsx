import { Button  } from "./ui/moving-border";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  return (
    <div>
      <Button
        borderRadius="1rem"
        className="bg-black  dark:bg-dark-color-2 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-10 flex flex-col justify-center align-center"
        containerClassName="m-auto w-[750px] max-w-[90%] h-auto md:mt-10"
      >
        <h1 className="text-2xl md:text-4xl font-bold">Get in touch with Me</h1>
        <div className="mt-10 text-lg">
          <ul>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <AiOutlineMail size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:sg641818@gmail.com"
                  target="_blank"
                  className="text-blue-700 dark:text-blue-200"
                >
                  sg641818@gmail.com
                </a>
              </div>
            </li>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <FaTwitter size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">DM on Twitter:</span>{" "}
                <a
                  href="https://x.com/sg6418"
                  target="_blank"
                  className="text-blue-700 dark:text-blue-200"
                >
                  @sg6418
                </a>
              </div>
            </li>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <FaInstagram size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">DM on Instagram:</span>{" "}
                <a
                  href="https://www.instagram.com/shivam_gupta_6418/"
                  target="_blank"
                  className="text-blue-700 dark:text-blue-200"
                >
                  @shivam_gupta_6418
                </a>
              </div>
            </li>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <ImLocation size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">Address:</span> Kanpur, Uttar Pradesh, India
              </div>
            </li>
          </ul>
        </div>
      </Button>
    </div>
  );
};

export default Contact;