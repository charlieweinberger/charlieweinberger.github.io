import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faLocationDot, faSchool } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="flex flex-col justify-center items-center h-screen bg-pink-400">

      {/* Include name, location, school, image, and links (github, linkedin, resume). Maybe also one/two sentences about who I am as a programmer? Make sure this sections looks good! */}

      <div className="flex w-2/3 h-2/3 blackBorder">
        
        {/* About Text */}
        <div className="flex items-start flex-col gap-4 w-1/2 text-2xl blackBorder">
          
          {/* Name */}
          <div className="text-8xl text-left blackBorder">Charlie Weinberger</div>

          {/* Role, Location, and University */}
          <ul className="text-left blackBorder">
          <li className="flex items-center blackBorder">
              <FontAwesomeIcon icon={faLaptop} className="h-6" />
              <div>Fullstack Web Developer</div>
            </li>
            <li className="flex items-center blackBorder">
              <FontAwesomeIcon icon={faLocationDot} className="h-6" />
              <div>Pasadena, California / Irvine, California</div>
            </li>
            <li className="flex items-center blackBorder">
              <FontAwesomeIcon icon={faSchool} className="h-6" />
              <div>University of California, Irvine</div>
            </li>
          </ul>

          {/* Links */}
          <div className="flex justify-center items-center blackBorder"> {/* replace with shadcn/ui buttons? */}
            <button className="blackBorder p-4">Resume</button> 
            <button className="blackBorder p-4">LinkedIn</button>
            <button className="blackBorder p-4">GitHub</button>
          </div>

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
