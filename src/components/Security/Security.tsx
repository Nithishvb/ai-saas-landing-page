import { Button } from "@/components/ui/button";
import Image from "next/image";
import SecurityImage from "@/assets/Image [big-images-on-homepage] (1).png";
import DotPattern from "@/assets/Group (1).png";

export function Security() {
  return (
    <section className="relative py-10 bg-[#1a1625] overflow-hidden border-b border-white/10">
      {/* Dots Pattern - Left Side */}
      <div className="absolute left-[-125px] top-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src={DotPattern}
          alt=""
          width={200}
          height={400}
          className="opacity-60 w-[389px]"
          style={{ transform: `rotate(${90}deg)`, transition: 'transform 0.5s' }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Badges */}
          <div className="relative mx-auto left-[40px] top-[-20px]">
            {/* Center Logo with Glow */}
            <Image
              src={SecurityImage}
              alt="Security Logo"
              width={64}
              height={64}
              className="w-[400px] h-[450px]"
            />
          </div>

          {/* Right Side - Content */}
          <div className="text-left lg:max-w-xl">
            <p className="text-[#4461eb] font-medium mb-4">SECURITY</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for scale and enterprise level security
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              SOC-2 Type II certification, penetration tested, and regular
              vulnerability scans. Hosted behind a VPC. Data encryption at rest
              and transit.
            </p>
            <Button
              variant="outline"
              className="bg-black text-white border border-2 rounded-3xl border-[#7286FF] px-8 py-5"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
            <div className="border border-white w-3/5 mt-[80px] opacity-10"></div>
        </div>
      </div>
    </section>
  );
}
