const path = require('path');
const importAll = (
  context: __WebpackModuleApi.RequireContext,
  pattern: string | RegExp,
  flag: string
) => {
  const map = {}
  // console.error(context, context.keys())
  for (const key of context.keys()) {
    const keyArr = key.split('/')
    keyArr.shift() // 移除.
    // console.error(context(key))
    map[keyArr.join('.').replace(RegExp(pattern, flag), '')] = context(key)
  }
  return map
}
export default importAll