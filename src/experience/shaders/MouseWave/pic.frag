precision highp float;
uniform sampler2D uTexture;
uniform float uPlaneAspect;
uniform float uPictureAspect;
uniform float uTime;
uniform vec3 uColor;
uniform vec2 uDistortionOfffset;
uniform float uAlpha;

varying vec2 vUv;
varying vec3 vPosition;
varying float vWave;

vec3 rgbSplitOnScroll(sampler2D image, vec2 uv, vec2 offset) {
     float r = texture2D(image, uv + offset).r;
     vec2 gb = texture2D(image, uv).gb;
     return vec3(r, gb);
}

void main() {

     vec3 coolor = rgbSplitOnScroll(uTexture, vUv, uDistortionOfffset);

     float wave = vWave * 0.1;
     vec4 finalColor = texture2D(uTexture, vUv + wave);
     finalColor += vec4(coolor, 1.);
     gl_FragColor = finalColor;
}