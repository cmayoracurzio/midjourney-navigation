import { redirect } from "next/navigation"

import { MAIN_ROUTES } from "@/lib/constants"

export default function Home() {
  // Just to simulate that visiting the root while logged in should redirect to the Explore page
  redirect(MAIN_ROUTES.explore.href)
}
