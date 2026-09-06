export async function trackAction(action: string, source: string, payload?: Record<string, unknown>) {
  try {
    const response = await fetch("/api/actions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, source, payload }),
    })
    return response.ok
  } catch {
    return false
  }
}
