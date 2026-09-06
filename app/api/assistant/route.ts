import OpenAI from "openai"

export const runtime = "nodejs"

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { query?: string }
  const query = body.query?.trim()

  if (!query) {
    return new Response("Missing query", { status: 400 })
  }

  if (!process.env.OPENAI_API_KEY) {
    return new Response("OPENAI_API_KEY is not configured", { status: 500 })
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

  const stream = await client.responses.stream({
    model: "gpt-4.1-mini",
    input: [
      {
        role: "system",
        content:
          "You are Quantavex dashboard assistant. Keep answers concise, factual, and execution-focused for product operators.",
      },
      { role: "user", content: query },
    ],
    max_output_tokens: 220,
  })

  const encoder = new TextEncoder()
  const readableStream = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (event.type === "response.output_text.delta") {
            controller.enqueue(encoder.encode(event.delta))
          }
        }
        controller.close()
      } catch (error) {
        controller.error(error)
      } finally {
        await stream.finalResponse().catch(() => null)
      }
    },
  })

  return new Response(readableStream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
    },
  })
}
