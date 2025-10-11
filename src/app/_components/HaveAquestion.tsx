import backGround from "../../../public/WithGCC.png";

function HaveAquestion() {
  return (
    <section>
      <div
        className="relative w-full h-[300px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${backGround.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* طبقة الأوفرلاي */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* النص */}
        <div className="absolute w-full text-center z-10">
          <h2 className="font-bold text-[32px] md:text-[50px] text-wrap md:text-nowrap text-center mb-12 text-white">
            You Plan with GCC travel market starts here.
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HaveAquestion;
