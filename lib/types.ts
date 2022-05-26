import {Document} from 'mongoose';

export interface ICard extends Document {
  img: string;
  name: string;
  pirate: string;
  notoriety: string;
  primary_skills: string;
};
export interface Inews extends Document{
  img: string | undefined;
  image: string;
  title: string;
  description: string;
  date: string;
};
