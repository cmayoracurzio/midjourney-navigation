import {
  BadgeCheckIcon,
  BellIcon,
  CheckSquareIcon,
  CompassIcon,
  CreditCardIcon,
  HelpCircleIcon,
  ImagesIcon,
  MessageSquareIcon,
  PaintbrushVerticalIcon,
  PaletteIcon,
  PencilIcon,
} from "lucide-react"

export const SITE_NAME = "Midjourney"
export const DISCORD_URL = "https://discord.com/invite/midjourney"
export const LOGO_URL =
  "https://storage.tally.so/2f13dc31-8604-470c-b060-fdf587f4bc6b/Midjourney-Logo-Square.jpg"

// Route groups as objects instead of arrays to allow search by key if needed in the future
export const MAIN_ROUTES = {
  explore: {
    href: "/explore",
    label: "Explore",
    icon: CompassIcon,
    isSubscriberRoute: false,
  },
  create: {
    href: "/create",
    label: "Create",
    icon: PaintbrushVerticalIcon,
    isSubscriberRoute: true,
  },
  organize: {
    href: "/archive",
    label: "Organize",
    icon: ImagesIcon,
    isSubscriberRoute: true,
  },
  personalize: {
    href: "/personalize",
    label: "Personalize",
    icon: PaletteIcon,
    isSubscriberRoute: true,
  },
  edit: {
    href: "/editor",
    label: "Edit",
    icon: PencilIcon,
    isSubscriberRoute: true,
  },
  chatrooms: {
    href: "/chatrooms",
    label: "Chatrooms",
    icon: MessageSquareIcon,
    isSubscriberRoute: false,
  },
  updates: {
    href: "/updates",
    label: "Updates",
    icon: BellIcon,
    isSubscriberRoute: false,
  },
  help: {
    href: "/help",
    label: "Help",
    icon: HelpCircleIcon,
    isSubscriberRoute: false,
  },
} as const

export const USER_ROUTES = {
  account: {
    href: "/account",
    label: "Account",
    icon: BadgeCheckIcon,
    isSubscriberRoute: false,
  },
  billing: {
    href: "/billing",
    label: "Billing",
    icon: CreditCardIcon,
    isSubscriberRoute: false,
  },
  tasks: {
    href: "/tasks",
    label: "Tasks",
    icon: CheckSquareIcon,
    isSubscriberRoute: false,
  },
} as const
