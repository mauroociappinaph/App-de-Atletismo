import mongoose, { ConnectOptions, Partial } from 'mongoose';

export const connectDB = async () => {
    const options: Partial<ConnectOptions> = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    const url = "mongodb+srv://ciappinamaurooj:k65Nav1haGWnZTlR@clusteratletismo.vltbelw.mongodb.net/";

    try {
        await mongoose.connect(url, options);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


