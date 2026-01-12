import { getAssetPath } from "@/lib/basePath";
import Image from "next/image";

export default function GooglePlayBadge({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg hover:border-[#c8ff01] transition-all ${className}`}
    >
      <div className="relative">
        <Image
          src={getAssetPath("/g-app.png")}
          alt="Google Play icon"
          width={40}
          height={40}
          className="h-10 w-10 rounded"
          priority
        />
        <div className="absolute inset-0 rounded pointer-events-none"></div>
      </div>
      <div className="flex flex-col items-start">
        <span className="text-[10px] text-gray-400 uppercase tracking-wide leading-tight">
          Get it on
        </span>
        <span className="text-sm font-bold text-white leading-tight">
          Google Play
        </span>
      </div>
    </div>
  );
}
