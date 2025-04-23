import { createAgent } from 'openai/agent-sdk';
import dbConnect from '../../../lib/mongodb';
import ChatLog from '../../../models/ChatLog';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  // Connect to the database
  await dbConnect();

  // Get the user session
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { userId } = session.user;
  const { message } = req.body;

  // Create the OpenAI agent
  const agent = createAgent({
    name: 'insurance-bot',
    systemPrompt: `You are an AI insurance agent. Please provide professional advice regarding insurance. If the question is not about insurance, respond with “Sorry, but that question is outside my scope.”`,
  });

  // Get the AI's reply
  const reply = await agent.call({ input: message });

  // Save the chat log to the database
  const chatLog = new ChatLog({
    user: userId,
    messages: [
      { role: 'user', text: message, timestamp: new Date() },
      { role: 'assistant', text: reply, timestamp: new Date() },
    ],
  });

  await chatLog.save();

  // Respond with the AI's reply
  res.status(200).json({ reply });
}