import SVGWave from '../components/SVGWave';

function NavButton(title: string, href: string, side: "left" | "right") {
  return (
    <li>
      <a className={`float-${side} block text-center p-4 w-fit no-underline hover:bg-blue-700`} href={href}>
        {title}
      </a>
    </li>
  );
}

export default function Header() {
  return (
    <div>
      
      {/* See youtube playlist: https://www.youtube.com/playlist?list=PLIq-E89khPZ-0UyoJ11BUcyj8-z41zFp5 */}
      {/* The order of the buttons is reversed, right to left */}

      <SVGWave position={"top"} />

      <ul className="bg-blue-500 fixed w-full">
        {NavButton("Projects", "#Erojects", "right")}
        {NavButton("Experience", "#Experience", "right")}
        {NavButton("About", "#About", "right")}
        {NavButton("Charlie Weinberger", "#About", "left")}
      </ul>

    </div>
  );
}

//! I keep getting a bug where my navbar decides to stop flex-ing horizontally. The short-term solution seems to be commenting the code above and uncommenting the code below, running `npm run dev`, and then switching back to the version above and running `npm run dev` again.

// export default function Header() {
//   return (
//     <div>
//       <ul className="bg-neutral-700 fixed w-full">
//         <li className="float-left block text-white text-center p-4 no-underline hover:bg-neutral-900">
//           <a href="#About">Charlie Weinberger</a>
//         </li>
//         <li className="float-right block text-white text-center p-4 no-underline hover:bg-neutral-900">
//           <a href="#Projects">Projects</a>
//         </li>
//         <li className="float-right block text-white text-center p-4 no-underline hover:bg-neutral-900">
//           <a href="#Experience">Experience</a>
//         </li>
//         <li className="float-right block text-white text-center p-4 no-underline hover:bg-neutral-900">
//           <a href="#About">About</a>
//         </li>
//       </ul>
//     </div>
//   );
// }