# Midjourney Navigation

The purpose of the project is to rethink some navigation aspects of the Midjourney web app.

## Issues and improvement ideas

### Menu buttons have insufficient horizontal padding

In general, buttons with text inside (or text and icon) should have more horizontal padding than vertical, to compensate for the extra space that the text comes with above and below itself. (This is imposed by the font used.) Otherwise, the contents will seem too close to the sides of the button. This is especially noticeable when buttons are rounded and left or right aligned.

### Menu doesn't handle vertical overflow

The menu doesn't have a vertical scroll when the screen when the height is limited.

### Menu clutter

- Clearly distinguish between pages related to the primary purpose of the app (e.g., creating images), and pages related to other purposes (e.g., profile management, billing management, etc.). The latter can be grouped together under a single "My Account" menu item.
- "Organize" and "Manage Uploads" can be combined into a single page, as they are both related to organizing user resources that are directly related to the primary purpose of the app.
- Use different icons for "Subscribe" and "My Account" menu items. For "My Account", maybe the avatar of the current user could be used (e.g., if it is available through the OAuth provider).
- "Chat" menu item navigates to a Newbies chat room, not to /rooms, and alternatively can be expanded to reveal links to other room types. This introduces some complexity and clutter, so an alternative would be to have a single "Chat" menu item that leads to a /rooms page where users can browse and join different room types. If the goal is to encourage new users to join the Newbies room, it could be prominently featured at the top of the room types list with special styling or emphasis.

### Subscriber-only pages are not well protected

Subscriber-only pages can still be accessed if their url is typed in. Furthermore, the Subscribe dialog is correctly triggered when clicking on the "Organize" menu item in desktop mode, but in mobile mode "Organize" doesn't trigger the dialog and navigates to the page. This inconsistent behavior is probably due to different menu components being used in desktop mode andmobile mode.

### Different components in mobile and desktop modes

When different components are used in mobile and desktop modes, they are harder to maintain. Failure to make changes in both sets of components will lead to inconsistencies. An alternative proposed in the demo is to use the same menu component: superior maintainability, and zero context switching for users because the menu always looks the same.

### Subscribe dialog overflows

The size of the dialog can be reduced to fit the screen better, and the overflow scrollbar can be moved to the dialog content instead of the whole browser window.

### "Link accounts" button in Subscribe dialog does not close dialog

Self explanatory.

## Demo

This demo showcases the proposed improvements using the project's core tech stack:

- Next.js
- Tailwind CSS
- Lucide icons

Other comments:

- For expedited development, the demo uses shadcn/ui for base components.
- Page content is minimal as the demo focuses solely on navigation patterns.
- Some technical details (theme variables, package versions) may differ slightly from the main project.
