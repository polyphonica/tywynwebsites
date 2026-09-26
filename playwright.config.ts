import { defineConfig, devices } from "@playwright/test";

const port = 3100;

// Uses the locally installed Google Chrome rather than Playwright's own
// Chromium download; on a machine without Chrome, run
// `npx playwright install chrome` first.
const channel = "chrome";

// Runs against a production build, since dev mode injects its own overlay
// markup that axe would report on.
export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  reporter: "list",
  use: { baseURL: `http://localhost:${port}` },
  webServer: {
    command: `npm run build && npx next start -p ${port}`,
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
  projects: [
    {
      name: "desktop-light",
      use: { ...devices["Desktop Chrome"], colorScheme: "light", channel },
    },
    {
      name: "desktop-dark",
      use: { ...devices["Desktop Chrome"], colorScheme: "dark", channel },
    },
    {
      name: "mobile-light",
      use: { ...devices["Pixel 7"], colorScheme: "light", channel },
    },
  ],
});
