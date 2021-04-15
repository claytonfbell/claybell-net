/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const React = require("react")
const DarkModeProvider = require("material-ui-pack").DarkModeProvider
const ShowPrivateProvider = require("./src/components/ShowPrivateProvider")
  .ShowPrivateProvider

exports.wrapRootElement = ({ element }) => {
  return (
    <DarkModeProvider>
      <ShowPrivateProvider>{element}</ShowPrivateProvider>
    </DarkModeProvider>
  )
}
