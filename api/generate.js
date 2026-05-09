import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': 'https://el-archivo-maya.vercel.app', // Optional, for including your app on openrouter.ai rankings.
    'X-Title': 'El Archivo Maya', // Optional.
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt, systemPrompt } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'google/gemini-2.0-flash-lite-preview-02-05:free', // Using the free version as fallback or specific flash-lite
      messages: [
        { role: 'system', content: systemPrompt || 'Eres un experto en arqueología maya y cultura de Guatemala.' },
        { role: 'user', content: prompt },
      ],
      response_format: { type: 'json_object' },
    });

    const content = response.choices[0].message.content;
    res.status(200).json(JSON.parse(content));
  } catch (error) {
    console.error('OpenRouter Error:', error);
    res.status(500).json({ error: 'Failed to generate content', details: error.message });
  }
}
