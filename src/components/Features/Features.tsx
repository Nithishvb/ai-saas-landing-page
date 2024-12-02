import { Button } from "@/components/ui/button";
import { Sparkles, Network, Layout, ChevronRight } from "lucide-react";
import Image from "next/image";
import DotPattern from "@/assets/Group (1).png"

export function Features() {
  return (
    <section className="relative py-24 bg-[#1a1625] overflow-hidden px-[80px]">
      {/* Background Dots - Left */}
      <div className="absolute left-[50px] bottom-[110px] pointer-events-none">
        <Image
          src={DotPattern}
          alt=""
          width={200}
          height={200}
          className="opacity-60"
        />
      </div>

      {/* Background Dots - Right */}
      <div className="absolute right-[60px] top-[30px] pointer-events-none">
        <Image
          src={DotPattern}
          alt=""
          width={200}
          height={200}
          className="opacity-60"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#7286FF] font-medium mb-4 tracking-wide">FEATURES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-[28px]">
            Discover the Tools that Drive Success
          </h2>
          <p className="text-gray-200 text-lg mt-[20px]">
            Unleash innovation and accelerate growth with our dynamic product.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 bg-[#13111c] flex justify-center p-14 rounded-md z-10">
          {/* Feature 1 */}
          <div className="rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-[#2d2b52] rounded-lg flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-[#986fee]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Cutting-Edge Innovation
            </h3>
            <p className="text-gray-400">
              Experience groundbreaking technological advancements that push the
              boundaries of {"what's"} possible, revolutionizing industries and
              transforming the way we live and work.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-[#2d2b52] rounded-lg flex items-center justify-center mx-auto mb-6">
              <Network className="w-8 h-8 text-[#986fee]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Seamless Connectivity
            </h3>
            <p className="text-gray-400">
              Stay connected anytime, anywhere with our robust and reliable
              network infrastructure, ensuring uninterrupted communication and
              effortless access to the digital world.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-[#2d2b52] rounded-lg flex items-center justify-center mx-auto mb-6">
              <Layout className="w-8 h-8 text-[#986fee]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Intuitive User Interface
            </h3>
            <p className="text-gray-400">
              Enjoy a seamless and intuitive user experience with our sleek and
              user-friendly interface, designed to simplify complex tasks and
              enhance productivity.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <Button className="bg-black text-white border border-2 rounded-3xl border-[#7286FF] px-8 py-5">
            Contact Us
          </Button>
          <Button variant="ghost" className="text-white px-8 py-5 rounded-3xl">
            View All <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
