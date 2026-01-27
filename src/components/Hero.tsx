import { ChevronDown, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 mb-4">
            Nikini Abeywickrama
          </h1>
          <div className="h-1 w-24 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-2xl sm:text-3xl text-slate-600 mb-6">
            Data Science Graduate | Climate & GIS Enthusiast
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Transforming complex data into actionable insights for climate resilience
            and risk assessment
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="tel:0701539773"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-lg"
          >
            <Phone size={20} />
            <span>0701539773</span>
          </a>
          <a
            href="mailto:nikinivandana01@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-white text-slate-800 border-2 border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-all transform hover:scale-105 shadow-lg"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>
        </div>

        <button
          onClick={() => {
            const element = document.getElementById('about');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          className="animate-bounce mt-12 text-slate-600 hover:text-emerald-600 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
