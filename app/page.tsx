import { Button } from "@/components/ui/button";
import Image from "next/image";
import { env } from "@/config/env.config";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Button>Get Started server is running on {env.PORT}</Button>
    </div>
  );
}
