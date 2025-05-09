const Banner = () => {
  return (
    <div className="relative">
      {/* Text block, now right‑centered */}
      <div
        className="
            absolute 
            right-6
            top-1/2
           transform -translate-y-1/2
            flex flex-col 
            space-y-2
            text-white
          "
      >
        <h3 className="text-7xl font-bold">The Ultimate Fashion Hub</h3>
        <h3 className="text-5xl">We don't compromise on Fashion</h3>
        <h3 className="text-6xl font-semibold">Never give up on your style</h3>
      </div>

      {/* Banner image */}
      <img
        className="h-[700px] w-full object-cover"
        src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Fashion banner"
      />
    </div>
  );
};

export default Banner;
