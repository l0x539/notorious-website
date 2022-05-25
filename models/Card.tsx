import mongoose from 'mongoose';

/* PetSchema will correspond to a collection in your MongoDB database. */
const CardSchema = new mongoose.Schema({
  img: {
    /* The img of this Card */
    type: String,
    required: [true, 'Please provide a image for this card.'],
    maxlength: [200, 'Name cannot be more than 200 characters'],
  },
  name: {
    /* The name of this card */

    type: String,
    required: [true, 'Please provide a name for this card.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  pirate: {
    /* The  pirate of your card */

    type: String,
    required: [true, 'Please provide the pirate of your card.'],
    maxlength: [40, 'Species specified cannot be more than 40 characters'],
  },
  notoriety: {
    /* The notoriety of your card */

    type: String,
    required: [true, 'Please provide the notoriety of your card.'],
    maxlength: [100, 'Species specified cannot be more than 100 characters'],
  },
  primary_skills: {
    /* The primary_skills of your card */

    type: String,
    required: [true, 'Please primary_skills the notoriety of your card.'],
    maxlength: [40, 'Species specified cannot be more than 40 characters'],
  },
});

export default mongoose.models.Pet || mongoose.model('card', CardSchema);
