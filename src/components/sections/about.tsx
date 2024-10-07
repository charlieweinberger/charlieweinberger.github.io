import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faLocationDot, faSchool, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

/*

TODO: implement the ideas below. Lines 22-25 have not been addressed yet.

- If the window is wide enough, the text container should be to the left of the image. If not, the text container should be above the image.
- If side-by-side:
  - Text container
    - My name should be the same width as the buttons
    - There should be a minimum width, for the buttons
    - The size of the name should grow as the width of the text container grows
  - Image
    - The image should be the same height as the text container
    - The image should always be a circle
  - Spacing
    - There should be a minimum padding on the left and right of the screen, which shows when the window is not very wide
    - There should also be a minimum gap between the text container and the image
    - The space to the left, to the right, and in between the text container and image should all shrink at the same rate when the window changes size
- If one above the other:
  - My name should be aligned centrally, not left-aligned
  - The image should be the same width as the text container
  - Vertical spacing must look nice

*/

export default function About() {
  return (
    <div id="about" className="h-screen flex flex-wrap justify-center items-center p-16 gap-[10%] bg-neutral-950">
        
        {/* Name, Role, Location, University, Links */}
        <div className="flex items-start flex-col w-[32.15%] min-w-[410px] text-2xl gap-12">

          <div className="AboutSectionNameFontSize text-left font-bold leading-[1.1]">
            Charlie Weinberger
          </div>

          <div className="grid grid-cols-[30px_minmax(110px,_1fr)] justify-start text-left gap-4">
            {middleInfoLine(faLaptop, "Fullstack Web Developer")}
            {middleInfoLine(faLocationDot, "Pasadena, California / Irvine, California")}
            {middleInfoLine(faSchool, "University of California, Irvine")}
          </div>

          <div className="flex justify-center items-center mt-2 gap-6 w-full">
            {profileLink("Resume", "/Charlie_Weinberger_Resume.pdf")}
            {profileLink("LinkedIn", "https://linkedin.com/in/charlie-weinberger/")}
            {profileLink("GitHub", "https://github.com/charlieweinberger/")}
          </div>

        </div>

        {/* Picture */}
        <div className="flex justify-center items-center AboutSectionImageWidth">
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
      className="p-4 w-full border rounded-xl hover:bg-neutral-50 hover:text-neutral-950 active:bg-gray-300 active:text-neutral-950"
      href={link}
      target="_blank"
    >
      {text}
    </a>
  );
}