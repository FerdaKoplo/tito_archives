const CRTOverlay = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden mix-blend-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.8)_100%)] z-10" />

      <div
        className="absolute inset-0 opacity-[0.25] z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15)_0%,transparent_60%)] z-30 mix-blend-screen" />

      <div className="absolute inset-0 crt-flicker bg-black z-40" />
    </div>
  );
};

export default CRTOverlay;
