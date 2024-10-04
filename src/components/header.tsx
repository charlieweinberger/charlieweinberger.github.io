export default function Header() {
  return (
    <div>
      
      {/* See youtube playlist: https://www.youtube.com/playlist?list=PLIq-E89khPZ-0UyoJ11BUcyj8-z41zFp5 */}
      {/* NOTE: The order of the buttons is reversed, right to left */}

      {SVGWave()}

      <ul className="bg-blue-500 fixed w-full">
        {NavButton("Projects", "#projects", "right")}
        {NavButton("Experience", "#experience", "right")}
        {NavButton("About", "#about", "right")}
        {NavButton("Charlie Weinberger", "#about", "left")}
      </ul>

    </div>
  );
}

function SVGWave() {
  return (
    <div className="absolute top-14 left-0 w-full overflow-hidden leading-[0rem]">
      <svg
        className="relative block w-full h-24"
        data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
      >
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-blue-500"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-blue-500"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-blue-500"></path>
      </svg>
    </div>
  );
}

function NavButton(title: string, href: string, side: "left" | "right") {
  return (
    <li>
      <a className={`float-${side} block text-center p-4 w-fit no-underline hover:bg-blue-700`} href={href}>
        {title}
      </a>
    </li>
  );
}

// NOTE: I keep getting a bug where my navbar decides to stop flex-ing horizontally. The short-term solution seems to be commenting the code above and uncommenting the code below, running `npm run dev`, and then switching back to the version above and running `npm run dev` again.

// export default function Header() {
//   return (
//     <div>
//       <ul className="bg-neutral-700 fixed w-full">
//         <li className="float-left block text-white text-center p-4 no-underline hover:bg-neutral-900">
//           <a href="#about">Charlie Weinberger</a>
//         </li>
//         <li className="float-right block text-white text-center p-4 no-underline hover:bg-neutral-900">
//           <a href="#projects">Projects</a>
//         </li>
//         <li className="float-right block text-white text-center p-4 no-underline hover:bg-neutral-900">
//           <a href="#experience">Experience</a>
//         </li>
//         <li className="float-right block text-white text-center p-4 no-underline hover:bg-neutral-900">
//           <a href="#about">About</a>
//         </li>
//       </ul>
//     </div>
//   );
// }