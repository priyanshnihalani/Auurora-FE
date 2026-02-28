import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const deltaX = (mouseX - centerX) / centerX;
      const deltaY = (mouseY - centerY) / centerY;

      if (blob1Ref.current) {
        blob1Ref.current.style.transform =
          `translate(${deltaX * 80}px, ${deltaY * 80}px)`;
      }

      if (blob2Ref.current) {
        blob2Ref.current.style.transform =
          `translate(${deltaX * 160}px, ${deltaY * 160}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      <div
        ref={blob1Ref}
        className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[120px] transition-transform duration-300 ease-out will-change-transform"
      />

      <div
        ref={blob2Ref}
        className="absolute top-[10%] right-[20%] w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-[120px] transition-transform duration-300 ease-out will-change-transform"
      />
    </div>
  );
}
