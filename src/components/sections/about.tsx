import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faLocationDot, faSchool, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="flex flex-wrap	justify-center items-center h-screen gap-20 p-20 bg-neutral-950">
        
        {/* Name, Role, Location, University, Links */}
        <div className="flex items-start flex-col py-4 w-[32%] min-w-[460px] text-2xl border">
          
          <div className="text-[96px] text-left font-bold leading-[1.1]">
            Charlie Weinberger
          </div>
          
          <div className="grid grid-cols-[30px_minmax(110px,_1fr)] justify-start text-left gap-4 mt-12 mb-14">
            {getInfo(faLaptop, "Fullstack Web Developer")}
            {getInfo(faLocationDot, "Pasadena, California / Irvine, California")}
            {getInfo(faSchool, "University of California, Irvine")}
          </div>

          <div className="flex justify-center items-center gap-6 w-full">
            {getLink("Resume", "/Charlie_Weinberger_Resume.pdf")}
            {getLink("LinkedIn", "https://linkedin.com/in/charlie-weinberger/")}
            {getLink("GitHub", "https://github.com/charlieweinberger/")}
          </div>

        </div>

        {/* Picture */}
        <div className="flex justify-center items-center w-[500px] min-w-[32%] border">
          <Image
            src="/bonfire.png"
            width={768}
            height={768}
            alt="Picture of Charlie Weinberger"
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>

    </div>
  );
}

function getInfo(icon: IconDefinition, text: string) {
  return (
    <>
      <div className="flex justify-center items-center">
        <FontAwesomeIcon icon={icon} className="h-5" />
      </div>
      <p>{text}</p>
    </>
  );
}

function getLink(text: string, link: string) {
  return (
    <a
      className="py-4 px-6 w-full border rounded-xl hover:bg-neutral-50 hover:text-neutral-950 active:bg-gray-300 active:text-neutral-950"
      href={link}
      target="_blank"
    >
      {text}
    </a>
  );
}
