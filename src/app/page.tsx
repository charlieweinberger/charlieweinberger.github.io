import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <main>
        {/* ABOUT */}
        <section id="about" className="px-6 py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl font-bold text-blue-900 mb-4">
                Charlie Weinberger
              </h1>

              <p className="text-slate-600 mb-4 max-w-xl">
                I am a UCI Computer Science student focused on building software
                that improves people&apos;s lives. I&apos;ve recently interned
                at Beach Point Capital Management helping create a full-stack AI
                chatbot for financial research, and contributed to several club
                and personal projects.
              </p>

              <ul className="mb-6 text-slate-600 space-y-2">
                <li>
                  <strong>Location:</strong> Irvine, CA
                </li>
                <li>
                  <strong>Degree:</strong> B.S. Computer Science, UC Irvine
                  (Expected Jun 2027) • GPA: 3.35
                </li>
              </ul>

              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="mailto:charlieweinberger05@gmail.com">Email</a>
                </Button>

                <Button variant="outline" asChild>
                  <Link
                    href="https://www.linkedin.com/in/charlie-weinberger"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </Button>

                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/charlieweinberger"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </Button>

                <Button variant="outline" asChild>
                  <Link href="/Charlie_Weinberger_Resume.pdf" target="_blank">
                    Resume PDF
                  </Link>
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/images/me.jpeg"
                  alt="Photo of Charlie Weinberger"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Experience
            </h2>

            <div className="space-y-16">
              <ExperienceItem
                title="Software Engineering Intern"
                company="Beach Point Capital Management, Santa Monica, CA"
                date="Jul 2025 - Aug 2025"
                image="/images/bpcm.png"
                bullets={[
                  "Contributed to an AI chatbot that synthesizes financial information with citations.",
                  "Designed and implemented a Blazor frontend for customizable workflows.",
                  "Built a .NET RESTful API integrated with a Flask backend.",
                  "Redesigned codebase for readability and shared UI components.",
                ]}
              />

              <ExperienceItem
                title="Projects Committee Software Developer"
                company="ICS Student Council @ UCI, Irvine, CA"
                date="Nov 2024 - Present"
                image="/images/peterportal.png"
                bullets={[
                  "Contributing to PeterPortal used by 5000+ UCI students.",
                  "Building new frontend features and backend improvements.",
                  "Participating in GitHub PR reviews.",
                  "Refactoring to reduce technical debt.",
                ]}
              />

              <ExperienceItem
                title="Tech Lead"
                company="Anteater Adventure Club @ UCI, Irvine, CA"
                date="September 2025 - Present"
                image="/images/aac.png"
                bullets={[
                  "Creating a website for 100+ members.",
                  "Developing a custom Discord bot for event updates.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Projects
            </h2>

            <div className="space-y-16">
              <ProjectItem
                title="LeetCode Calendar"
                tech="React • Vite • TypeScript • Tailwind • GraphQL • Resend"
                image="/images/leetcode-calendar.png"
                bullets={[
                  "Browser extension showing LeetCode submission history.",
                  "Integrated GraphQL API for interactive calendar.",
                  "Published on Chrome Web Store & Firefox Add-ons.",
                ]}
              />

              <ProjectItem
                title="UCI App Catalog"
                tech="React • Next.js • TypeScript • Tailwind • Vercel • Resend"
                image="/images/uci-app-catalog.png"
                bullets={[
                  "Centralized catalog of UCI applications.",
                  "Implemented search, filtering, and favoriting.",
                  "Added email notifications for submissions.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact</h2>

            <Card>
              <CardContent className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                <ContactItem
                  label="Email"
                  href="mailto:charlieweinberger05@gmail.com"
                >
                  charlieweinberger05@gmail.com
                </ContactItem>

                <ContactItem
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/charlie-weinberger"
                >
                  linkedin.com/in/charlie-weinberger
                </ContactItem>

                <ContactItem
                  label="GitHub"
                  href="https://github.com/charlieweinberger"
                >
                  github.com/charlieweinberger
                </ContactItem>

                <ContactItem
                  label="Resume"
                  href="/Charlie_Weinberger_Resume.pdf"
                >
                  Open PDF
                </ContactItem>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-200 text-center py-8 font-semibold">
        Designed and implemented by Charlie Weinberger.
      </footer>
    </div>
  );
}

/* ===========================
   Reusable Components
=========================== */

function ExperienceItem({
  title,
  company,
  date,
  image,
  bullets,
}: {
  title: string;
  company: string;
  date: string;
  image: string;
  bullets: string[];
}) {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start border-b pb-12 last:border-0 text-center md:text-left">
      <div>
        <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
        <p className="text-green-700 font-medium">{company}</p>
        <p className="text-sm text-slate-500 mb-4">{date}</p>

        <ul className="list-disc pl-5 space-y-2 text-slate-600 inline-block text-left md:block md:text-left">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="rounded-lg border bg-slate-100 mx-auto"
      />
    </div>
  );
}

function ProjectItem({
  title,
  tech,
  image,
  bullets,
}: {
  title: string;
  tech: string;
  image: string;
  bullets: string[];
}) {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start border-b pb-12 last:border-0 text-center md:text-left">
      <div>
        <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
        <p className="text-green-700 font-medium mb-4">{tech}</p>

        <ul className="list-disc pl-5 space-y-2 text-slate-600 inline-block text-left md:block md:text-left">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="rounded-lg border bg-slate-100 mx-auto"
      />
    </div>
  );
}

function ContactItem({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="font-semibold text-blue-900 mb-2">{label}</p>
      <a
        href={href}
        target="_blank"
        className="text-green-700 hover:underline break-words"
      >
        {children}
      </a>
    </div>
  );
}

// import SVGWave from '@/components/SVGWave';
// import About from '@/components/About';

// export default function App() {
//   return (
//     <div className="text-neutral-50 text-center m-0">

//       {/*

//       Header: Blue, wavy, layered, sticky
//       Footer: Blue, wavy, layered

//       About: Similar to header, but a different color (either entirely (ex: green) or transition (ex: blue to green)) and a different design (not wavy and layered, but maybe spiky? slanted?)
//       Experience: Same as about, but with another different color & shape
//       Projects: Same as about, but with another different color & shape

//       */}

//       {/* <Header /> */}
//       <SVGWave position={"top"} />
//       <About />
//       <SVGWave position={"bottom"} />
//       {/* <Experience /> */}
//       {/* <Projects /> */}
//       {/* <Footer /> */}

//     </div>
//   );
// }
