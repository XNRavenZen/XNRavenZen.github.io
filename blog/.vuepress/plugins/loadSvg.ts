const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../public/image/icon/svg', true, /\.svg$/)
export default requireAll(req)