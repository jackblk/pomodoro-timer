import { join, dirname } from "path";
import { fileURLToPath } from "url";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const output = {
  path: join(__dirname, "/dist"),
  filename: "index.bundle.js",
};
export const devServer = {
  port: 3010,
  watchContentBase: true,
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
    {
      test: /\.scss/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    },
  ],
};
export const plugins = [new MiniCssExtractPlugin()];
