import * as THREE from "three";
import React, { useRef, useState } from "react";
import { shaderMaterial, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { extend } from "@react-three/fiber";
import vertexShader from "./shaders/RgbSplitonScroll/pic.vert";
import fragmentShader from "./shaders/RgbSplitonScroll/pic.frag";
import { lerp } from "three/src/math/MathUtils";

const Display = (props) => {
	const matRf = useRef();
	const meshRf = useRef();
	// Scroll variables
	let target = 0;
	let current = 0;
	let ease = 0.3;
	const texture = useTexture(props.texture);

	const CustomImageMaterial = shaderMaterial(
		// uniforms
		{
			uTime: 0,
			uTexture: new THREE.Texture(),
			uMouse: new THREE.Vector2(0.0, 0.0),
			uImagesize: new THREE.Vector2(
				texture.image.width,
				texture.image.height
			),
			uPlanesize: new THREE.Vector2(props.scale.x, props.scale.y),
			uDistortionOfffset: new THREE.Vector2(0.0, 0.0),

			uAlpha: 1.0,
		},
		// shaders
		vertexShader,
		fragmentShader
	);

	// declaratively
	extend({ CustomImageMaterial });

	const scrl = useScroll();

	useFrame((_, delta) => {
		target = window.scrollY;
		current = lerp(scrl.delta, target, ease);

		if (meshRf.current) {
			matRf.current.uTime = delta;
			matRf.current.uTexture = texture;
			matRf.current.uDistortionOfffset = new THREE.Vector2(
				(target - current) * 0.28,
				// 28 is related to mesh scale based on this project setup
				// -(target - current) * 28
				-scrl.delta * 28
			);
		}
	});

	return (
		<mesh ref={meshRf} position={props.position} scale={props.scale}>
			<planeGeometry args={[1, 1, 128, 128]} attach="geometry" />
			<customImageMaterial attach="material" ref={matRf} />
		</mesh>
	);
};

export default Display;
