const parentScripts = require('../../../_base/package-scripts')

parentScripts.scripts.default = 'react-scripts start'
parentScripts.scripts.once = 'webpack-dev-server'
parentScripts.scripts.production = 'start ./dist/index.html'
parentScripts.scripts.test = "react-scripts test"
parentScripts.scripts.eject = "react-scripts eject"

module.exports = parentScripts
