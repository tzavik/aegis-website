import mongoose, { Schema, Document } from 'mongoose';

interface IMessage {
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

interface IChatLog extends Document {
  user: mongoose.Types.ObjectId;
  messages: IMessage[];
}

const messageSchema = new Schema<IMessage>({
  role: { type: String, enum: ['user', 'assistant'], required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const chatLogSchema = new Schema<IChatLog>({
  user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  messages: { type: [messageSchema], default: [] },
});

const ChatLog = mongoose.model<IChatLog>('ChatLog', chatLogSchema);

export default ChatLog;