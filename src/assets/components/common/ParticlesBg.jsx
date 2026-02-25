import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        particles: {
          number: { value: 70 },
          color: { value: "#38bdf8" },
          links: {
            enable: true,
            color: "#38bdf8",
            distance: 120
          },
          move: { enable: true }
        }
      }}
      className="absolute inset-0"
    />
  );
}