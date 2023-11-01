import path from "path";
import * as dotenv from "dotenv";

export const config = () => dotenv.config({path: path.resolve(__dirname, `../../../configs/${process.env.NODE_ENV || "development"}.env`)});

export default config;