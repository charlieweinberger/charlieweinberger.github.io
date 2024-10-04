export default function Header() {
  return (
    <div>
      
      {/* See youtube playlist: https://www.youtube.com/playlist?list=PLIq-E89khPZ-0UyoJ11BUcyj8-z41zFp5 */}

      <ul className="bg-neutral-700 fixed w-full">
        {/* Reverse order, right to left */}
        {NavButton("Projects", "#projects", "right")}
        {NavButton("Experience", "#experience", "right")}
        {NavButton("About", "#about", "right")}
        {NavButton("Charlie Weinberger", "#about", "left")}
      </ul>

    </div>
  );
}

function NavButton(title: string, href: string, side: "left" | "right") {
  return (
    <li>
      <a className={`float-${side} block text-white text-center p-4 w-fit no-underline hover:bg-neutral-900`} href={href}>
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