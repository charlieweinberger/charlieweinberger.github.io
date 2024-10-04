import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faLocationDot, faSchool, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="flex justify-center items-center h-screen gap-[84px] blackBorder bg-pink-400">
        
        {/* Name, Role Location, University, Links */}
        <div className="flex items-start flex-col px-10 py-4 w-4/12 text-2xl blackBorder">
          <div className="text-8xl leading-[1.1] my-8 text-left blackBorder">Charlie Weinberger</div>
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
    <div className="grid grid-cols-[30px_minmax(110px,_1fr)] justify-start text-left gap-4 p-4 blackBorder">
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
    <div className="flex justify-center items-center my-10 pr-4 gap-4 w-full">
      {professionalLink("Resume")}
      {professionalLink("LinkedIn")}
      {professionalLink("GitHub")}
    </div>
  );
}

function professionalLink(text: string) {
  return (
    <button className="p-4 w-full border"> {/* replace with shadcn/ui buttons? */}
      {text}
    </button>
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