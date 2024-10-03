export default function Header() {
  return (
    <div>
      
      {/* See youtube playlist: https://www.youtube.com/playlist?list=PLIq-E89khPZ-0UyoJ11BUcyj8-z41zFp5 */}

      <ul className="bg-neutral-700 fixed w-full">

        <li className="float-left block text-white text-center p-4 no-underline hover:bg-neutral-900">
          <a href="#about">Charlie Weinberger</a>
        </li>

        {/* The items below are in reverse-order */}
        
        <li className="float-right block text-white text-center p-4 no-underline hover:bg-neutral-900">
          <a href="#projects">Projects</a>
        </li>
        
        <li className="float-right block text-white text-center p-4 no-underline hover:bg-neutral-900">
          <a href="#experience">Experience</a>
        </li>
        
        <li className="float-right block text-white text-center p-4 no-underline hover:bg-neutral-900">
          <a href="#about">About</a>
        </li>

      </ul>

    </div>
  );
}
