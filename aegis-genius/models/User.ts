import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  email: string;
  name: string;
  lastLogin: Date;
}

const userSchema: Schema<IUser> = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  lastLogin: { type: Date, default: Date.now },
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;