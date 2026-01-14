export const env = {
  baseUrl: process.env.BASE_URL ?? "https://playwright.dev",
  apiBaseUrl: process.env.API_BASE_URL ?? "https://reqres.in"
} as const;
