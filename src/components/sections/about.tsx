import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faLocationDot, faSchool, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="flex justify-center items-center h-screen gap-[128px] bg-neutral-950">
        
        {/* Name, Role Location, University, Links */}
        <div className="flex items-start flex-col py-4 w-[32.15%] text-2xl">
          <div className="my-8 text-8xl text-left font-bold leading-[1.1]">Charlie Weinberger</div>
          {middleInformation()}
          {links()}
        </div>

        {/* Picture (must be square) */}
        <div className="flex justify-center items-center w-1/3">
          {picture()}
        </div>

    </div>
  );
}

// MiddleInformation

function middleInformation() {
  return (
    <div className="grid grid-cols-[30px_minmax(110px,_1fr)] justify-start text-left gap-4 py-4">
      {middleInfoLine(faLaptop, "Fullstack Web Developer")}
      {middleInfoLine(faLocationDot, "Pasadena, California / Irvine, California")}
      {middleInfoLine(faSchool, "University of California, Irvine")}
    </div>
  );
}

function middleInfoLine(icon: IconDefinition, text: string) {
  return (
    <>
      <div className="flex justify-center items-center">
        <FontAwesomeIcon icon={icon} className="h-5" />
      </div>
      <div className="text-2xl">
        {text}
      </div>
    </>
  );
}

// Links

function links() {
  return (
    <div className="flex justify-center items-center my-10 pr-1 gap-6 w-full">
      {profileLink("Resume", "/Charlie_Weinberger_Resume.pdf")}
      {profileLink("LinkedIn", "https://linkedin.com/in/charlie-weinberger/")}
      {profileLink("GitHub", "https://github.com/charlieweinberger/")}
    </div>
  );
}

function profileLink(text: string, link: string) {
  return (
    <a
      className="p-4 w-full border rounded-xl hover:bg-neutral-50 hover:text-neutral-950 active:bg-gray-300 active:text-neutral-950"
      href={link}
      target="_blank"
    >
      {text}
    </a>
  );
}

// Picture

function picture() {
  return (
    <Image 
      src="/christian.png"
      width={0}
      height={0}
      sizes="1"
      alt="Picture of Christian"
      style={{
        height: "auto",
        width: "auto",
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  );
}