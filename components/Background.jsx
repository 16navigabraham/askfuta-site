export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-lines opacity-25" />

      <div
        className="absolute top-[-30%] left-[-15%] w-[700px] h-[700px] rounded-full animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(102,45,145,0.35) 0%, rgba(102,45,145,0) 65%)",
          filter: "blur(60px)",
        }}
      />

      <div
        className="absolute bottom-[-25%] right-[-15%] w-[800px] h-[800px] rounded-full animate-float-reverse"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0) 65%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
