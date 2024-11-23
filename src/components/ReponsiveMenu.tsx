"use client"

import { useCallback, useState } from "react"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuContent } from "@/components/MenuContent"
import { SubscribeDialog } from "@/components/SubscribeDialog"

type ResponsiveMenuProps = {
  isMobile: boolean
}

export function ResponsiveMenu({ isMobile }: ResponsiveMenuProps) {
  // Get from authenticated user
  const isUserSubscribed = false

  const [isSubscribeDialogOpen, setIsSubscribeDialogOpen] =
    useState<boolean>(!isUserSubscribed)

  const handleOpenSubscribeDialog = useCallback(() => {
    setIsSubscribeDialogOpen(true)
  }, [])

  return (
    <>
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed left-2.5 top-2.5 z-50 bg-background"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 overflow-y-auto p-2">
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">Menu</SheetDescription>
            </SheetHeader>
            <MenuContent
              isUserSubscribed={isUserSubscribed}
              handleOpenSubscribeDialog={handleOpenSubscribeDialog}
            />
          </SheetContent>
        </Sheet>
      ) : (
        <aside className="sticky left-0 top-0 h-screen w-52 overflow-y-auto">
          <MenuContent
            isUserSubscribed={isUserSubscribed}
            handleOpenSubscribeDialog={handleOpenSubscribeDialog}
          />
        </aside>
      )}

      <SubscribeDialog
        isOpen={isSubscribeDialogOpen}
        setIsOpen={setIsSubscribeDialogOpen}
      />
    </>
  )
}
