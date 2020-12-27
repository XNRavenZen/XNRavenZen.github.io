import importAll from '../utils/importAll';
const comps = require.context('./components/', true, /\.scss$/);
const current = require.context('./', true, /\.scss$/);
const styleOfComps = importAll(comps, /\.scss$/, "g");
const styleOfCurrent = importAll(current, /\.scss$/, "g");
// console.error("当前样式", styleOfCurrent)
export default Object.assign({}, styleOfComps)