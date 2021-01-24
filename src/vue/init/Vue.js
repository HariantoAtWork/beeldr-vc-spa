import Vue from 'vue'
Vue.config.productionTip = false

require('./use')(Vue)
require('./filter')(Vue)
require('./directive')(Vue)
require('./component')(Vue)

export default Vue
