export async function askGemini(userInput) {
  if (!userInput || typeof userInput !== "string") {
    throw new Error("Invalid prompt");
  }

  const res = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=AIzaSyDgzVtl9zqicS0vshYEmUZRnStFyQJG2-8",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: userInput }],
          },
        ],
      }),
    }
  );

  const data = await res.json();

  // 🔴 Handle API-level errors
  if (!res.ok) {
    console.error("Gemini API error:", data);
    throw new Error(data.error?.message || "Gemini API error");
  }

  // 🔴 Handle empty / unexpected responses
  if (
    !data.candidates ||
    !data.candidates.length ||
    !data.candidates[0].content ||
    !data.candidates[0].content.parts ||
    !data.candidates[0].content.parts.length
  ) {
    console.error("Invalid Gemini response:", data);
    throw new Error("No response from Gemini");
  }

  return data.candidates[0].content.parts[0].text;
}
