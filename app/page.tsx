import { Button } from "@/components/ui/button";
import Image from "next/image";
import UserButton from "@/modules/components/user-botton";
/**
 * Renders the app's centered home screen with primary actions.
 *
 * Displays a full-height, vertically centered container with a primary `Get Started`
 * button and a `UserButton` component.
 *
 * @returns The React element for the home screen.
 */
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Button>Get Started</Button>
      <UserButton />
    </div>
  );
}
