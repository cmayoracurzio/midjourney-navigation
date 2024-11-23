"use client"

import { memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SparklesIcon } from "lucide-react"

import { LOGO_URL, MAIN_ROUTES, SITE_NAME, USER_ROUTES } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { UserNavigation } from "@/components/UserNavigation"

const MAIN_ROUTES_ARRAY = Object.values(MAIN_ROUTES)

type MenuContentProps = {
  isUserSubscribed: boolean
  handleOpenSubscribeDialog: () => void
}

export const MenuContent = memo(
  ({ isUserSubscribed, handleOpenSubscribeDialog }: MenuContentProps) => {
    const pathname = usePathname()

    return (
      <nav className="flex min-h-full flex-col gap-2 p-4">
        {/* Logo */}
        <div className="flex select-none items-center gap-1 px-2">
          <Image
            src={LOGO_URL}
            alt={SITE_NAME}
            width={32}
            height={32}
            className="dark:invert"
          />
          <span className="text-lg font-medium">{SITE_NAME}</span>
        </div>

        {/* Main navigation */}
        <div className="mt-2 flex-1">
          <ul className="list-none space-y-2">
            {MAIN_ROUTES_ARRAY.map((item) => {
              const isActive = pathname.startsWith(item.href)
              const isDisabled = item.isSubscriberRoute && !isUserSubscribed
              const Icon = item.icon

              return (
                <li key={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start rounded-full font-semibold",
                      isActive &&
                        "bg-orange-500/10 text-orange-500 outline outline-1 outline-orange-500/50 hover:bg-orange-500/10 hover:text-orange-500"
                    )}
                    asChild
                  >
                    <Link
                      href={item.href}
                      onClick={(event) => {
                        if (isDisabled) {
                          event.preventDefault()
                          handleOpenSubscribeDialog()
                        }
                      }}
                    >
                      <Icon />
                      <span>{item.label}</span>
                    </Link>
                  </Button>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Subscribe button */}
        {!isUserSubscribed && (
          <Button
            variant="ghost"
            className="w-full justify-start rounded-full font-semibold text-indigo-500 hover:bg-indigo-400/15 hover:text-indigo-500 dark:text-indigo-400"
            asChild
          >
            <Link href={USER_ROUTES.billing.href}>
              <SparklesIcon />
              <span>Subscribe</span>
            </Link>
          </Button>
        )}

        {/* User navigation */}
        <UserNavigation />
      </nav>
    )
  }
)

MenuContent.displayName = "MenuContent"
