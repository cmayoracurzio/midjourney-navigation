"use client"

import { useIsMobile } from "@/hooks/useIsMobile"
import { ResponsiveMenu } from "@/components/ReponsiveMenu"

export function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()

  if (isMobile === undefined) {
    return null
  }

  return (
    <div className="relative flex flex-row">
      <ResponsiveMenu isMobile={isMobile} />
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}
