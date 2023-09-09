/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

export const Perro = (props) => {
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dogue/model.gltf"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nose.geometry}
        material={materials.nose}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh002.geometry}
        material={materials["body_orange-light"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh002_1.geometry}
        material={materials.body_orange}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh001.geometry}
        material={materials.eyes}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh001_1.geometry}
        material={materials.eyes_pupile}
      />
    </group>
  );
};

useGLTF.preload(
  "/https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dogue/model.gltf"
);
