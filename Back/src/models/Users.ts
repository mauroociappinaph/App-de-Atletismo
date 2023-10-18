import { prop, getModelForClass } from "@typegoose/typegoose";

class Users {
    @prop({ required: true })
    name: string;

    @prop({ required: true, unique: true }) 
    email: string;

    @prop({ required: true, minlength: 6 }) 
    password: string;

}

export const UserModel = getModelForClass(Users);