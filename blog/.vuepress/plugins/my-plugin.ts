module.exports = (option, ctx) => {
  console.error("我的插件", option, ctx);
  return {
    test: 233,
  };
};
