"use client";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.replace("/sportsbooks");
  };

  return (
    <button
      onClick={(e) => handleClick(e)}
      className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
    >
      sign in
    </button>
  );
}
