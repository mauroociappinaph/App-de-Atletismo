import { prop, getModelForClass } from "@typegoose/typegoose";

class Users {
    @prop({ required: true })
    name: string;

    @prop({ required: true, unique: true , trim: true }) 
    email: string;

    @prop({ required: true, minlength: 6 }) 
    password: string;

    @prop({dafault: null, trim: true }) 
    phone: string;

    @prop()
    token?: string;

    @prop({default: false})
    confirmed: boolean;


}

export const UserModel = getModelForClass(Users);