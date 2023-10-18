import { prop, getModelForClass } from "@typegoose/typegoose";

class Result {
  @prop({ required: true })
  athlete: string;

  @prop({ required: true })
  competition: string;

  @prop({ required: true })
  event: string;

  @prop({ required: true })
  result: number;

  @prop({ required: true, enum: ["metros"] })
  unit: "metros";

  @prop({ required: true, type: Date })
  date: Date;
}

export const ResultModel = getModelForClass(Result);
