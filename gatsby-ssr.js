/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const React = require("react")
const DarkModeProvider = require("material-ui-pack/dist/DarkModeProvider")
  .DarkModeProvider

exports.wrapRootElement = ({ element }) => {
  return <DarkModeProvider>{element}</DarkModeProvider>
}
