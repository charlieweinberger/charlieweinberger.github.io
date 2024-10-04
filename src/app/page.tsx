import Header from '../components/header';
import Footer from '../components/footer';
import SVGWave from '../components/SVGWave';

import About from '../components/sections/about';
import Experience from '../components/sections/experience';
import Projects from '../components/sections/projects';

export default function App() {
  return (
    <div className="text-neutral-50 text-center m-0">
      
      {/*
      
      Header: Blue, wavy, layered, sticky
      Footer: Blue, wavy, layered
      
      About: Similar to header, but a different color (either entirely (ex: green) or transition (ex: blue to green)) and a different design (not wavy and layered, but maybe spiky? slanted?)
      Experience: Same as about, but with another different color & shape
      Projects: Same as about, but with another different color & shape

      */}

      {/* <Header /> */}
      <SVGWave position={"top"} />
      <About />
      <SVGWave position={"bottom"} />
      {/* <Experience /> */}
      {/* <Projects /> */}
      {/* <Footer /> */}
   
    </div>
  );
}
