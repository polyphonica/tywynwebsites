import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { projectDetails, prototypes } from "../src/data/projects";

// Same list as the sitemap, so new projects and prototypes are covered
// automatically.
const paths = [
  "/",
  "/work/starter-sites",
  "/work/custom-apps",
  "/prototypes",
  "/about",
  "/contact",
  "/de",
  ...projectDetails.map((project) => `/projects/${project.slug}`),
  ...prototypes.map((prototype) => `/prototypes/${prototype.slug}`),
];

for (const path of paths) {
  test(`${path} has no WCAG 2.2 AA violations`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    const summary = results.violations.map((violation) => ({
      rule: violation.id,
      impact: violation.impact,
      targets: violation.nodes.map((node) => node.target.join(" ")),
    }));
    expect(summary).toEqual([]);
  });
}

test("skip link is the first stop and moves focus to the main content", async ({
  page,
}) => {
  await page.goto("/about");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await expect(skip).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
});

test("every page is reachable from the menu on a phone", async ({
  page,
}, testInfo) => {
  test.skip(!testInfo.project.name.startsWith("mobile"), "phone layout only");
  await page.goto("/");
  const button = page.getByRole("button", { name: "Menu" });
  await expect(button).toHaveAttribute("aria-expanded", "false");
  await button.click();
  await expect(button).toHaveAttribute("aria-expanded", "true");

  const menu = page.locator("#mobile-menu");
  for (const name of [
    "Starter sites",
    "Custom apps",
    "Prototypes",
    "About",
    "Contact",
  ]) {
    await expect(menu.getByRole("link", { name })).toBeVisible();
  }

  await page.keyboard.press("Escape");
  await expect(menu).toBeHidden();
  await expect(button).toBeFocused();

  await button.click();
  await menu.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(menu).toBeHidden();
});

test("contact form fields show a visible focus ring", async ({ page }) => {
  await page.goto("/contact");
  const name = page.getByLabel("Name");
  await name.focus();
  const outline = await name.evaluate(
    (element) => getComputedStyle(element).outlineStyle,
  );
  expect(outline).not.toBe("none");
});
