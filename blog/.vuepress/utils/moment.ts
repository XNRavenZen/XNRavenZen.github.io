// import { VueConstructor } from "vue"
import moment from "moment";

/* interface momentExport {
  install: VueConstructor
} */

const momentExport = {
  install: (app, options) => {
    app.config.globalProperties.$moment = moment
  }
}

export default momentExport