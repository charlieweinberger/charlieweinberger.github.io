function getLink(name: string, link: string) {
  return <a className={name} href={link} target="_blank">{name}</a>
}

export default function App() {
  return (
    <div id="home" className="home">
      <div className="name">
        Charlie Weinberger
      </div>
      <div className="college">
        Sophomore @ University of California, Irvine
      </div>
      <div className="role">
        Interested in full-stack web development and artificial intelligence applications
      </div>
      <div className="experience">
        Skills: Python, C/C++, Rust, Java, JavaScript, TypeScript, HTML/CSS, Node.js, Express.js, React, Next.js, Firebase, PostgreSQL, AWS, OpenAI API, LangChain, Pinecone
      </div>
      <div className="hobbies">
        Hobbies: soccer, rock climbing, astronomy, linguistics, geography, politics
      </div>
      <div className="links">
        {getLink("GitHub", "https://github.com/charlieweinberger/")},&nbsp;
        {getLink("LinkedIn", "https://linkedin.com/in/charlie-weinberger/")},&nbsp;
        {getLink("Resume", "/Charlie_Weinberger_Resume.pdf")}
      </div>
    </div>
  );
}