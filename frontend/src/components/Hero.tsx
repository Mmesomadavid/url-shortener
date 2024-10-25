import bgImg from '../assets/hero-animate.gif';

const Hero = () => {
  return (
    <section className="bg-white text-gray-700 py-10 sm:py-16 md:py-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Got an idea! <br /> Shorten Your Urls Instantely</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8">Paste your URL below to shorten and share!</p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              className="w-full sm:w-2/3 px-4 py-4 text-black rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200 transition duration-300"
              placeholder="Enter your URL here"
            />
            <button className="px-6 py-2 bg-black font-semibold text-white rounded-lg hover:bg-blue-600 transition">
              Shorten URL
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end">
          <img
            src={bgImg}
            alt="Hero Animation"
            className="w-3/4 sm:w-2/3 md:w-full h-auto rounded-lg shadow-md"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
