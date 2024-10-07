import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faLocationDot, faSchool, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="h-screen flex flex-wrap justify-center items-center p-16 gap-48 bg-neutral-950">
        
        {/* Name, Role Location, University, Links */}
        <div className="w-[30%] min-w-[460px] flex items-start flex-col gap-14 text-2xl">
          
          <div className="AboutSectionName text-left font-bold leading-[1.1]">
            Charlie Weinberger
          </div>
          
          <div className="grid grid-cols-[30px_minmax(110px,_1fr)] justify-start text-left gap-4">
            {middleInfoLine(faLaptop, "Fullstack Web Developer")}
            {middleInfoLine(faLocationDot, "Pasadena, California / Irvine, California")}
            {middleInfoLine(faSchool, "University of California, Irvine")}
          </div>
          
          <div className="w-full flex justify-center items-center gap-6">
            {profileLink("Resume", "/Charlie_Weinberger_Resume.pdf")}
            {profileLink("LinkedIn", "https://linkedin.com/in/charlie-weinberger/")}
            {profileLink("GitHub", "https://github.com/charlieweinberger/")}
          </div>

        </div>

        {/* Picture (must be square) */}
        <div className="flex justify-center items-center w-[33%]">
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

function middleInfoLine(icon: IconDefinition, text: string) {
  return (
    <>
      <div className="flex justify-center items-center">
        <FontAwesomeIcon icon={icon} className="h-5" />
      </div>
      <p>
        {text}
      </p>
    </>
  );
}

function profileLink(text: string, link: string) {
  return (
    <a
      className="w-full py-4 px-6 border rounded-xl hover:bg-neutral-50 hover:text-neutral-950 active:bg-gray-300 active:text-neutral-950"
      href={link}
      target="_blank"
    >
      {text}
    </a>
  );
}