import { Features } from "@/components/Features/Features";
import HomePage from "@/components/HomePage/HomePage";
import { Integrations } from "@/components/Integration/Integration";
import { Security } from "@/components/Security/Security";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Features />
      <Integrations />
      <Security />
    </div>
  );
}
