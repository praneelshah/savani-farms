import mangoVarieties from "@/assets/mango-varieties.jpg";

const MangoVarietiesSection = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <img
          src={mangoVarieties}
          alt="Meet the Gang of Mangos - Savani Farms has different varieties including Alphonso, Kesar, Chaunsa, Olamangola, Thai Mango, and Indian Jasmine Mango"
          className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl mx-auto h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default MangoVarietiesSection;
