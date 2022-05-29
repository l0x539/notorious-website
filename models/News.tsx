import mongoose from 'mongoose';
import {INews} from '../lib/types';

/* newsSchema will correspond to a collection in your MongoDB database. */

mongoose.Promise = global.Promise;

const newsSchema = new mongoose.Schema<INews>({
  img: {
    /* The  pthe image url of your news */

    type: String,
    required: [true, 'Please provide the image url of your news.'],
    maxlength: [4000, 'Image specified cannot be more than 4000 characters'],
  },
  owner: {
    /* The  owner url of your news */

    type: String,
    required: [true, 'Please provide the image url of your news.'],
    maxlength: [30, 'Owner specified cannot be more than 30 characters'],
  },
  title: {
    /* The  title url of your news */

    type: String,
    required: [true, 'Please provide the image url of your news.'],
    maxlength: [100, 'Title specified cannot be more than 100 characters'],
  },
  description: {
    /* the description of your news*/

    type: String,
    required: [true, 'Please provide the description of your news.'],
    maxlength: [4000,
      'Description specified cannot be more than 4000 characters'],
  },
  date: {
    /* the date of your news */

    type: String,
    required: [true, 'Please provide the date of your news.'],
    maxlength: [40, 'Date specified cannot be more than 40 characters'],
  },
});

export default mongoose.models.news ||
mongoose.model<INews>('news', newsSchema);
