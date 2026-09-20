import Image from "next/image";
import logoImage from "@/app/7526.png";

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-logo relative flex items-center flex-shrink-0 ${compact ? "h-9 w-[100px]" : "h-9 w-[132px]"}`}>
      <Image src={logoImage} alt="SoloBuild" fill sizes={compact ? "100px" : "132px"} className="brand-logo-image object-cover" priority />
      <span className="brand-logo-wordmark" aria-hidden="true"><span>SoloBuild</span><sup>+</sup></span>
    </span>
  );
}