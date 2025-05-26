import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80 20H70C65 20 60 25 60 30V40H20V30C20 25 25 20 30 20H40V40H50V20H60V40H70V20H80V40H90V30C90 25 85 20 80 20Z"
          fill="black"
        />
        <path
          d="M20 50V70C20 75 25 80 30 80H70C75 80 80 75 80 70V50H20Z"
          fill="black"
        />
      </svg>
      <span className="ml-2 font-bold text-xl">Aviontive</span>
    </div>
  );
}