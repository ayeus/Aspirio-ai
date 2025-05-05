const CONSOLEGROQ_API_KEY = "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"; // 🔐 Replace with your actual key

export async function callConsoleGroqApi(prompt: string, systemMessage: string, temperature = 1): Promise<string> {
  const headers = {
    "Authorization": `Bearer ${CONSOLEGROQ_API_KEY}`,
    "Content-Type": "application/json",
  };

  const payload = {
    model: "llama3-70b-8192", // ✅ Updated model name
    temperature: temperature,
    max_tokens: 2048,
    messages: [
      { role: "system", content: systemMessage },
      { role: "user", content: prompt },
    ],
  };

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.choices || !data.choices[0]?.message?.content) {
      throw new Error("Invalid response from Groq API");
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling ConsoleGroq API:", error);
    throw error;
  }
}
