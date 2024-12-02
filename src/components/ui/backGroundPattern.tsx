import Image from "next/image";
import WavePattern from "@/assets/elements.png";

export function BackgroundPattern() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <Image src={WavePattern} alt="" height={300} width={300} className="h-full opacity-30 w-[1300px] inset-1" />
    </div>
  );
}
