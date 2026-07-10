"use client";

import { usePathname } from "next/navigation";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScrolling from "@/components/ui/SmoothScrolling";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <CustomCursor />
      <SmoothScrolling>{children}</SmoothScrolling>
    </>
  );
}
