export function logStep(message: string) {
  // Keep it simple; in real usage you can swap to a logger package.
  // Prefix makes CI output easy to scan.
  console.log(`[STEP] ${message}`);
}
