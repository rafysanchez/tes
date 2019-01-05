import { model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  createdAt: Date,
  updatedAt: Date,
  firstName: String,
  lastName: String,
  username: String,
  email: {
    type: String,
    default: '',
    required: true,
    unique: true,
    lowercase: true
  },
  password: String,
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

export const User = model('User', UserSchema);
