/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { useEffect, useState } from "react";

const Video = ({ videourl, ...props }) => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: videourl,
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => {
    video.play();
  }, [video]);

  return (
    <mesh
      castShadow
      receiveShadow
      position={[0, 2.1, 0.12]}
      scale={[4.3, 3.3, 1]}
      {...props}
    >
      <planeGeometry />
      <meshBasicMaterial>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </mesh>
  );
};

export default Video;
