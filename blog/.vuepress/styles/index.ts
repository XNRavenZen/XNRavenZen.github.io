import importAll from "../utils/importAll";
const comps = require.context("./components/", true, /\.scss$/);
const current = require.context("./", true, /\.scss$/);
/**
 * 导出组件的样式
 */
export const componentStyles = importAll(comps, /\.scss$/, "g");
/**
 * 导出公共样式
 */
export const styleOfCurrent = importAll(current, /\.scss$/, "g");

// export default Object.assign({}, styleOfComps);
