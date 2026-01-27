import mangoVarieties from "@/assets/newimg.png";

const MangoVarietiesSection = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <img
          src={mangoVarieties}
          alt="Meet the Gang of Mangos - Savani Farms has different varieties including Alphonso, Kesar, Chaunsa, Olamangola, Thai Mango, and Indian Jasmine Mango"
          className="w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto h-auto rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
};

export default MangoVarietiesSection;
