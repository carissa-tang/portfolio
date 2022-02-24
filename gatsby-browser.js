/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onInitialClientRender = () => {
  console.log("ReactDOM.render has executed")

  let canvasDiv = document.getElementById("particle-canvas")
  let options = {
    particleColor: "#888",
    interactive: true,
    speed: "medium",
    density: "high",
  }

  let particleCanvas = new ParticleNetwork(canvasDiv, options)
}
