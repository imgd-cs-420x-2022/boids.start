import simulation_frag from './simulation.frag.glsl'
import simulation_vert from './simulation.vert.glsl'
import render_frag from './render.frag.glsl'
import render_vert from './render.vert.glsl'

// "global" variables
let gl, 
    buffers

const textures = [] 

window.onload = function() {
  const canvas = document.getElementById( 'gl' )
  gl = canvas.getContext( 'webgl2' )
  canvas.width  = window.innerWidth
  canvas.height = window.innerHeight

  render()
}

function render() {
  window.requestAnimationFrame( render )
}

