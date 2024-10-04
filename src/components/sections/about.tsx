import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faLocationDot, faSchool, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="flex flex-col justify-center items-center h-screen bg-pink-400">
      <div className="flex w-2/3 h-2/3 blackBorder">
        
        {/* Include name, location, school, image, and links (github, linkedin, resume). Maybe also one/two sentences about who I am as a programmer? Make sure this sections looks good! */}

        {/* Name, Role Location, University, Links */}
        <div className="flex items-start flex-col gap-4 px-10 py-4 w-1/2 text-2xl blackBorder">
          <div className="text-8xl my-10 text-left blackBorder">Charlie Weinberger</div>
          {middleInformation()}
          {links()}
        </div>

        {/* Picture */}
        {/* Note: Image must be square */}
        <div className="flex justify-center items-center w-1/2">
          <Image 
            src="/christian.png"
            width={0}
            height={0}
            sizes="1"
            alt="Picture of Christian"
            style={{
              height: "80%",
              width: "auto",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>

      </div>
    </div>
  );
}

// MiddleInformation

function middleInformation() {
  return (
    <ul className="flex flex-col gap-4 text-left blackBorder">
      {middleInfoLine(faLaptop, "Fullstack Web Developer")}
      {middleInfoLine(faLocationDot, "Pasadena, California / Irvine, California")}
      {middleInfoLine(faSchool, "University of California, Irvine")}
    </ul>
  );
}

function middleInfoLine(icon: IconDefinition, text: string) {
  return (
    <li className="flex items-center gap-4 blackBorder">
      <FontAwesomeIcon icon={icon} className="h-6" />
      <div>{text}</div>
    </li>
  );
}

// Links

function links() {
  return (
    <div className="flex justify-center items-center my-10 pr-4 gap-4 w-full blackBorder"> {/* replace with shadcn/ui buttons? */}
      {professionalLink("Resume")}
      {professionalLink("LinkedIn")}
      {professionalLink("GitHub")}
    </div>
  );
}

function professionalLink(text: string) {
  return (
    <button className="blackBorder p-4 w-full">
      {text}
    </button>
  );
}