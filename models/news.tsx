import mongoose from 'mongoose';
import {Inews} from '../lib/types';

/* newsSchema will correspond to a collection in your MongoDB database. */

mongoose.Promise = global.Promise;

const newsSchema = new mongoose.Schema<Inews>({
  image: {
    /* The  pthe image url of your news */

    type: String,
    required: [true, 'Please provide the image url of your news.'],
    maxlength: [4000, 'Species specified cannot be more than 4000 characters'],
  },
  description: {
    /* the description of your news*/

    type: String,
    required: [true, 'Please provide the description of your news.'],
    maxlength: [4000, 'Species specified cannot be more than 4000 characters'],
  },
  date: {
    /* the date of your news */

    type: String,
    required: [true, 'Please provide the date of your news.'],
    maxlength: [40, 'Species specified cannot be more than 40 characters'],
  },
});

export default mongoose.models.news ||
mongoose.model<Inews>('news', newsSchema);
