import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1a1625]">
      {/* Navigation */}
      <nav className="sticky mx-auto px-[90px] py-4 flex items-center justify-between h-[89px] backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="flex items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            NeuroByte AI
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-purple-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-purple-300">
            About
          </Link>
          <Link href="/features" className="text-white hover:text-purple-300">
            Features
          </Link>
          <Link href="/pricing" className="text-white hover:text-purple-300">
            Pricing
          </Link>
          <Link href="/blog" className="text-white hover:text-purple-300">
            Blog
          </Link>
        </div>

        <Button className="bg-black text-white border border-2 rounded-3xl border-[#7286FF] px-6">
          Book a Demo
        </Button>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32 relative">
        {/* Background Pattern */}
        {/* <BackgroundPattern /> */}

        <div className="max-w-4xl mx-auto text-center relative z-10 pt-7">
          <h1 className="text-5xl md:text-[58px] font-bold mb-6 text-white">
            Unlock AI-Powered Insights to Drive{" "}
            <span className="leading-normal bg-gradient-to-r from-[#4461eb] via-[#986fee] to-[#ff6b6b] text-transparent bg-clip-text">
              Business Decisions Today
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Transform your data into actionable intelligence with our AI-driven
            SaaS, designed to optimize efficiency, automate workflows, and
            provide predictive insights for informed decision-making.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-black text-white border border-2 rounded-3xl border-[#7286FF] px-8 py-6 text-lg">
              Book a Demo
            </Button>
            <Button
              variant="outline"
              className="bg-black text-white border border-2 rounded-3xl border-[#7286FF] px-8 py-6 text-lg"
            >
              Take Product Tour →
            </Button>
          </div>
        </div>
        {/* <div className="absolute right-[100px] h-full pointer-events-none">
          <Image 
            src={GroupImage} 
            alt=""
            width={100}
            height={600}
            className="object-cover opacity-20 w-[350px]"
          />
        </div> */}
      </div>

      <div className="container mx-auto  pb-20">
        <p className="text-center text-gray-200 mb-8 tracking-wide">
          TRUSTED BY COMPANIES IN 100+ COUNTRIES AROUND THE GLOBE.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 mt-10 bg-black ">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}
