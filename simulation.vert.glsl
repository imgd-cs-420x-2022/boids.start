#version 300 es
precision mediump float;

in vec4 agent_in;

uniform sampler2D flock;
uniform float agentCount;

out vec4 agent_out;

void main() {
  gl_Position = vec4( 0., .0, 0., 1. );
}
