import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Laptop, MapPin, GraduationCap } from "lucide-react";

function InfoRow({ icon: Icon, text }: { icon: React.ElementType, text: string; }) {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex justify-center items-center">
        <Icon />
      </div>
      <p className="text-lg sm:text-2xl">
        {text}
      </p>
    </div>
  );
}

function ProfileLink({ text, link }: { text: string, link: string }) {
  return (
    <Button
      asChild
      variant="outline"
      className="sm:h-20 w-full rounded-xl sm:text-2xl bg-black"
    >
      <Link href={link} target="_blank">
        {text}
      </Link>
    </Button>
  );
}

export default function About() {
  return (
    <div id="About" className="h-screen flex flex-wrap justify-center items-center p-16 gap-[10%] bg-neutral-950">
        
        {/* Name, Role, Location, University, Links */}
        <div className="flex flex-col gap-12 justify-center items-center">

          <div className="text-5xl sm:text-7xl text-center font-bold">
            Charlie Weinberger
          </div>

          <div className="flex flex-col gap-4 sm:gap-6 text-left">
            <InfoRow icon={Laptop} text="Fullstack Web Developer" />
            <InfoRow icon={MapPin} text="Pasadena, California / Irvine, California" />
            <InfoRow icon={GraduationCap} text="University of California, Irvine" />
          </div>

          <div className="w-full flex justify-center items-center gap-6">
            <ProfileLink text="Resume" link="/Charlie_Weinberger_Resume.pdf" />
            <ProfileLink text="LinkedIn" link="https://linkedin.com/in/charlie-weinberger/" />
            <ProfileLink text="GitHub" link="https://github.com/charlieweinberger/" />
          </div>

        </div>

    </div>
  );
}
