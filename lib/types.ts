import {Document} from 'mongoose';

export interface ICard extends Document {
  img: string;
  name: string;
  pirate: string;
  notoriety: string;
  primary_skills: string;
}
