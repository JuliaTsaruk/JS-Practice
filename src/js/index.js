import "../styles/style.scss";
import "./slider";
import "./calculator"


const importAll = img => img.keys().map(img);
const images = importAll(require.context('../assets/', true, /.(?:png|jpeg|jpg|svg)$/i));
