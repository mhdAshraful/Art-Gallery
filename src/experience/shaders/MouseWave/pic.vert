precision highp float;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying float vWave;
uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uImagesize;
uniform vec2 uPlanesize;
uniform vec2 uDistortionOfffset;
uniform float uAlpha;
float PI = 2.141529;

float circ(vec2 uv, vec2 circlePos, float radious) {
     float dist = distance(circlePos, uv);
     return 1. - smoothstep(0., radious, dist);
}

float elevation(vec2 uv, float radious, float intensity) {
     float circuler = circ(uv, (uMouse * 0.5) + 0.5, radious);
     return circuler * intensity;
}

vec3 imageCurveOnScroll(vec3 pos, vec2 uv, vec2 offset) {
     pos.x = pos.x + (sin(uv.y * PI) * offset.x);
     pos.y = pos.y + (sin(uv.x * PI) * offset.y);
     return pos;
}

void main() {
     vUv = uv;
     float imageAspect = uImagesize.x / uImagesize.y;
     float planeAspect = uPlanesize.x / uPlanesize.y;

     vec2 imgCoverMultiplier = vec2(1., 1.);

     if(imageAspect > planeAspect) {
          imgCoverMultiplier = vec2(planeAspect / imageAspect, 1.);
     } else {
          imgCoverMultiplier = vec2(imageAspect / planeAspect, 1.);
     }

     vec2 newUv = (vUv - vec2(0.5)) * imgCoverMultiplier + vec2(0.5);

     vPosition = position;

     // onscroll deform
     vPosition += imageCurveOnScroll(vPosition, vUv, uDistortionOfffset);
     // wave on z axis
     vPosition.z += elevation(vUv, 0.4, .2);

     // final
     gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);

     vWave = vPosition.z;
     vUv = newUv;
}