import Link from "next/link"

import { MAIN_ROUTES, USER_ROUTES } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type SubscribeDialogProps = {
  isOpen?: boolean
  setIsOpen?: (newIsOpen: boolean) => void
}

export function SubscribeDialog({ isOpen, setIsOpen }: SubscribeDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl sm:grid-cols-4">
        <div className="-m-6 mr-2 hidden bg-opal bg-contain sm:block"></div>
        <div className="space-y-6 sm:col-span-3">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Explore the Frontiers of Imagination
            </DialogTitle>
            <DialogDescription>
              With the world&apos;s most advanced image models and regular
              updates with community steered roadmaps.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8">
            <div className="space-y-1.5">
              <h3 className="text-lg font-semibold tracking-tight">
                Join our creative community
              </h3>
              <p className="text-sm text-muted-foreground">
                Hop in our{" "}
                <DialogClose asChild>
                  <Button variant="link" className="h-fit p-0" asChild>
                    <Link href={MAIN_ROUTES.chatrooms.href}>
                      group creation rooms
                    </Link>
                  </Button>
                </DialogClose>{" "}
                or enjoy open access to billions of images and prompts with
                daily trends and real-time search.
              </p>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-semibold tracking-tight">
                Multiple tiers for everyone
              </h3>
              <p className="text-sm text-muted-foreground">
                Subscriptions start at $10/mo with a 20% discount on yearly
                plans.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <DialogClose asChild>
                <Button asChild>
                  <Link href={USER_ROUTES.billing.href}>Join now</Link>
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="outline">Look around for a bit</Button>
              </DialogClose>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Already have a subscription?{" "}
            <DialogClose asChild>
              <Button variant="link" className="h-fit p-0" asChild>
                <Link href={USER_ROUTES.account.href}>Link your accounts</Link>
              </Button>
            </DialogClose>
            .
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
