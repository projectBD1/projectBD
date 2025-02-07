import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const BDSS_SCHEMA = new Schema({
  type: String,
  location: String,
  date: String,
  x_coord: Number,
  y_coord: Number,
  description: String,
  source1: String,
  source2: String,
  isSpam: Boolean,
  tags: Object
})

const BDSS_MAP = model('BDSS_MAP', BDSS_SCHEMA);
export default BDSS_MAP;