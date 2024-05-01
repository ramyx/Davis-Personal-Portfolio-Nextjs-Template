'use client'
import Particles from "react-tsparticles";
import "./ParticleBackground.scss";
import { FC } from "react";

interface IParticleBackgroundPageProps {
  particleConfig: any;
}

const ParticleBackground: FC<IParticleBackgroundPageProps> = ({ particleConfig }) => {
  return (
    <Particles className="cs_hero_particle_1" params={particleConfig}></Particles>
  )
}

export default ParticleBackground;
