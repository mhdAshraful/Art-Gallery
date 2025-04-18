precision highp float;

uniform sampler2D uTexture;
uniform vec2 uDistortionOfffset;
uniform float uAlpha;

varying float vb;
varying vec2 vUv;
varying vec3 vPosition;

vec3 rgbSplitOnScroll(sampler2D image, vec2 uv, vec2 offset) {
// splitting Red channel
     float r = texture2D(image, uv + offset).r;
     vec2 gb = texture2D(image, uv).gb;
     return vec3(r, gb);

// splitting Blue channel
     // float b = texture2D(image, uv + offset * vb * 0.2).b;
     // vec2 rg = texture2D(image, uv + offset * vb).rg;
     // return vec3(rg, b);

// splitting green channel
     // vec2 rb = texture2D(image, uv + offset * .2).rg;
     // float g = texture2D(image, uv + offset).b;
     // return vec3(rb, g);

// spliting all channels
     // float r = texture2D(image, uv + offset).r;
     // float g = texture2D(image, uv + offset * 0.2).g;
     // float b = texture2D(image, uv + offset * 0.7).b;
     // return vec3(r, g, b);
}

void main() {
     // rgb split
     vec3 color = rgbSplitOnScroll(uTexture, vUv, uDistortionOfffset);

     vec4 finalColor = vec4(color, uAlpha);
     gl_FragColor = finalColor;
}