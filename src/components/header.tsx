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
