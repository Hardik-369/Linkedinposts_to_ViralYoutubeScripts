import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.together.xyz',
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_TOGETHER_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const generateYouTubeScript = async (linkedinPost: string): Promise<string> => {
  try {
    const response = await api.post('/inference', {
      model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
      prompt: `Convert the following LinkedIn post into an engaging YouTube script that's viral-worthy. Make it conversational, engaging, and add appropriate transitions and hooks:

${linkedinPost}

Generate a complete script that includes:
1. An attention-grabbing introduction
2. Main content broken down into clear sections
3. Call-to-action at the end
4. Natural transitions between sections`,
      max_tokens: 1000,
      temperature: 0.7,
    });

    return response.data.output.choices[0].text;
  } catch (error) {
    console.error('Error generating script:', error);
    throw new Error('Failed to generate YouTube script');
  }
};