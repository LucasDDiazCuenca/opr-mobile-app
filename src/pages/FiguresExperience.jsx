/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { Environment, Float, ContactShadows, OrbitControls } from "@react-three/drei";
import { LayerMaterial, Depth, Noise } from "lamina";

// eslint-disable-next-line react/prop-types
export default function FiguresExperience() {
	return (
		<>
			<OrbitControls autoRotate minPolarAngle={Math.PI / 1.8} maxPolarAngle={Math.PI / 1.8} />
			<pointLight position={[10, 10, 5]} />
			<pointLight position={[-10, -10, -5]} />
			<ambientLight intensity={0.4} />
			<group position={[0, -1.5, 0]}>
				<Float position={[0, 2.15, 0]} speed={2} rotationIntensity={2} floatIntensity={2}>
					<mesh castShadow receiveShadow>
						<torusKnotGeometry args={[1, 0.25, 257, 24, 4, 3]} />
						<meshStandardMaterial color="green" roughness={0.2} metalness={1} />
					</mesh>
				</Float>
				<ContactShadows scale={10} blur={3} opacity={0.25} far={10} />
			</group>

			{/* We're building a cube-mapped environment declaratively.
          Anything you put in here will be filmed (once) by a cubemap-camera
          and applied to the scenes environment, and optionally background. */}
			<Environment background resolution={64}>
				<Striplight position={[10, 2, 0]} scale={[1, 3, 10]} />
				<Striplight position={[-10, 2, 0]} scale={[1, 3, 10]} />
				<mesh scale={300}>
					<sphereGeometry args={[2, 64, 64]} />
					<LayerMaterial side={THREE.BackSide}>
						<Depth
							colorA="#00ffff"
							colorB="#ff8f00"
							alpha={0.5}
							mode="normal"
							near={10}
							far={300}
							origin={[100, 100, 100]}
						/>
						<Noise mapping="local" type="cell" scale={0.5} mode="softlight" />
					</LayerMaterial>
				</mesh>
			</Environment>
		</>
	);
}

function Striplight(props) {
	return (
		<mesh {...props}>
			<boxGeometry />
			<meshBasicMaterial color="white" />
		</mesh>
	);
}
