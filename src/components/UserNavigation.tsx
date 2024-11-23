"use client"

import Link from "next/link"
import {
  ChevronsUpDownIcon,
  CircleUserRoundIcon,
  LogOutIcon,
  MonitorIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react"
import { useTheme } from "next-themes"

import { DISCORD_URL, USER_ROUTES } from "@/lib/constants"
import { useIsMobile } from "@/hooks/useIsMobile"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DiscordIcon } from "@/components/DiscordIcon"

const USER_ROUTES_ARRAY = Object.values(USER_ROUTES)

export function UserNavigation() {
  const { theme, setTheme } = useTheme()
  const isMobile = useIsMobile()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-full justify-start rounded-full font-semibold"
        >
          <CircleUserRoundIcon />
          <span>My Account</span>
          <ChevronsUpDownIcon
            className="ml-auto"
            style={{ width: "14px", height: "14px" }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side={isMobile ? "bottom" : "right"}
        align="end"
        className="w-44"
      >
        <DropdownMenuGroup>
          {USER_ROUTES_ARRAY.map((route) => (
            <DropdownMenuItem key={route.href} asChild>
              <Link href={route.href}>
                <route.icon />
                <span>{route.label}</span>
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              {theme === "system" && <MonitorIcon />}
              {theme === "light" && <SunIcon />}
              {theme === "dark" && <MoonIcon />}
              <span>Theme</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuCheckboxItem
                  checked={theme === "system"}
                  onCheckedChange={() => setTheme("system")}
                >
                  System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={theme === "light"}
                  onCheckedChange={() => setTheme("light")}
                >
                  Light
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={theme === "dark"}
                  onCheckedChange={() => setTheme("dark")}
                >
                  Dark
                </DropdownMenuCheckboxItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <a href={DISCORD_URL} target="_blank">
              <DiscordIcon />
              <span>Discord</span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LogOutIcon />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
