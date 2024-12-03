import { Button } from "@/components/ui/button";
import Image from "next/image";
import Inetgration from "@/assets/Image [big-images-on-homepage].png";

export function Integrations() {
  return (
    <section className="relative py-24 bg-[#1a1625] overflow-hidden px-[80px] flex justify-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <p className="text-[#7286FF] font-medium mb-4">INTEGRATIONS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white py-[10px] text-[36px]">
              Unified view of your customers
            </h2>
            <p className="text-gray-300 text-lg mb-8 pt-[19px]">
              Interpret will integrate directly with any feedback channel. Take
              advantage of our CSV importer or API
            </p>
            <Button
              variant="outline"
              className="bg-black text-white border border-2 rounded-3xl border-[#7286FF] px-8 py-5"
            >
              View all Integrations
            </Button>
          </div>

          {/* Right Grid of Integration Icons */}
          <div className="h-[500px] hidden lg:block">
            <div>
              <Image src={Inetgration} alt="" height={200} width={200} className="w-[530px] h-[450px] mt-[20px]" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
            <div className="border border-white w-3/5 mt-[80px] opacity-10"></div>
        </div>
      </div>
    </section>
  );
}
