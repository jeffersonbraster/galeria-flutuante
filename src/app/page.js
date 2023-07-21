"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Foto1, Foto2, Foto3, Foto4, Foto5, Foto6, Foto8, Foto9 } from "@/data";

export default function Home() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);

  let requestAnimationFrameId = null;

  let xForce = 0;

  let yForce = 0;

  const easing = 0.08;

  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;

    xForce += movementX * speed;

    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);

    yForce = lerp(yForce, 0, easing);

    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });

    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });

    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;

    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);

      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      className="h-screen w-screen overflow-hidden relative bg-[#06092B]"
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
    >
      <div ref={plane1} className="w-full h-full absolute">
        <Image
          src={Foto1}
          alt="image"
          width={300}
          className="absolute brightness-70 left-[90%] top-[70%] transform -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src={Foto2}
          alt="image"
          width={300}
          className="absolute brightness-70 left-[5%] top-[65%] transform -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src={Foto3}
          alt="image"
          width={225}
          className="absolute brightness-70 left-[35%] top-[10%] transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div ref={plane2} className="w-full h-full absolute">
        <Image
          src={Foto4}
          alt="image"
          width={250}
          className="absolute brightness-60 left-[5%] top-[10%] transform -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src={Foto5}
          alt="image"
          width={200}
          className="absolute brightness-60 left-[80%] top-[30%] transform -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src={Foto6}
          alt="image"
          width={225}
          className="absolute brightness-60 left-[60%] top-[60%] transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div ref={plane3} className="w-full h-full absolute">
        <Image
          src={Foto9}
          alt="image"
          width={150}
          className="absolute brightness-50 left-[65%] top-[10%] transform -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src={Foto8}
          alt="image"
          width={200}
          className="absolute brightness-50 left-[40%] top-[75%] transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-center">
        <h1 className="font-normal text-white m-0 mb-3">
          Nossa galera flutuante
        </h1>
        <span className="text-primary-pink m-0 mt-4">Jefferson ❤️ Liana</span>
      </div>
    </main>
  );
}
