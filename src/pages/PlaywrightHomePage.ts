import { expect, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PlaywrightHomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto("/");
  }

  async expectTitleContains(text: string) {
    await expect(this.page).toHaveTitle(new RegExp(text, "i"));
  }

  getDocsLink() {
    return this.page.getByRole("link", { name: /docs/i });
  }
}
