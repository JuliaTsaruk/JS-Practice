import "../styles/style.scss";
import "./slider";
import "./calculator";
import "./tracker";
import "./weather";
import "./maze_game";

const importAll = (img) => img.keys().map(img);
const images = importAll(
  require.context("../assets/", true, /.(?:png|jpeg|jpg|svg)$/i)
);
