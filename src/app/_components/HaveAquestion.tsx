import backGround from "../../../public/contact/86ed2366d360890bed1074f24500c6eb5250ad7e.png";
function HaveAquestion() {
  return (
    <section>
      <div
        className="relative w-full h-[300px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${backGround.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center 80%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute  w-full  text-center">
          <h2 className="font-bold text-[32px] md:text-[50px] text-wrap md:text-nowrap text-center mb-12 text-primary">
            Your Journey to the GCC Starts Here.
          </h2>

        </div>
      </div>
    </section>
  );
}

export default HaveAquestion;
