import { redirect } from "next/navigation"

import { MAIN_ROUTES, USER_ROUTES } from "@/lib/constants"

export default async function Page({
  params,
}: {
  params: Promise<{ segments: string[] }>
}) {
  // This is just an example of validating if a user can access a route.
  // Route protection can be implemented differently depending on the project's routing setup:
  // - Using middleware
  // - Catch-all routes like this one
  // - Separate, directory-based routes

  const { segments } = await params

  const currentRoute = [
    ...Object.values(MAIN_ROUTES),
    ...Object.values(USER_ROUTES),
  ].find((route) => route.href.endsWith(segments[0]))

  // Get from authenticated user
  const isUserSubscribed = false

  if (currentRoute?.isSubscriberRoute && !isUserSubscribed) {
    redirect(MAIN_ROUTES.explore.href)
  }

  return (
    <>
      <div className="text-lg font-semibold tracking-tight max-sm:text-center sm:text-xl">
        {currentRoute?.label}
      </div>
    </>
  )
}
