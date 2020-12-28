interface ScrollOption {
  // click(event: Event): void
  mouseover(event: MouseEvent | Event): void
  mouseout(event: MouseEvent | Event): void
}
const scrollOption: ScrollOption = {
  /* click: (event) => {
    console.error("点击事件", event);
  }, */
  /* mouseover: (event) => {
    console.error("鼠标悬浮事件", event, event.target);
  },
  mouseout: (event) => {
    console.error("鼠标移开事件", event);
  }, */
  mouseover: function (event) {
    // console.error("鼠标悬浮事件", event, this);
  },
  mouseout: function (event) {
    // console.error("鼠标移开事件", event, this);
  },
}
export default scrollOption;