import mongoose from 'mongoose';
import {ICard} from '../lib/types';

/* CardSchema will correspond to a collection in your MongoDB database. */

mongoose.Promise = global.Promise;

const newsSchema = new mongoose.Schema<ICard>({
  image: {
    /* The  pirate of your card */

    type: String,
    required: [true, 'Please provide the image url of your news.'],
    maxlength: [4000, 'Species specified cannot be more than 4000 characters'],
  },
  description: {
    /* The notoriety of your card */

    type: String,
    required: [true, 'Please provide the description of your news.'],
    maxlength: [4000, 'Species specified cannot be more than 4000 characters'],
  },
  date: {
    /* The primary_skills of your card */

    type: String,
    required: [true, 'Please primary_skills the date of your news.'],
    maxlength: [40, 'Species specified cannot be more than 40 characters'],
  },
});

export default mongoose.models.news ||
mongoose.model<ICard>('news', newsSchema);
