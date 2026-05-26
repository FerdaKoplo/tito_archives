const CRTOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_120%)]" />

      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

      <div className="absolute inset-0 crt-flicker bg-black" />
    </div>
  );
};

export default CRTOverlay;
