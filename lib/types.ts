import {Document} from 'mongoose';

export interface ICard extends Document {
  img: string;
  name: string;
  pirate: string;
  notoriety: string;
  primary_skills: string;
};
export interface INews extends Document{
  img: string;
  owner:string;
  title: string;
  description: string;
  date: string;
};
