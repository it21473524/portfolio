import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Get In Touch
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <p className="text-lg text-slate-700 text-center mb-12 leading-relaxed">
            I'm always open to discussing data science opportunities, climate research projects,
            or collaborations in geospatial analysis. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="mailto:nikinivandana01@gmail.com"
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Email</p>
                <p className="text-slate-800 font-medium">nikinivandana01@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:0701539773"
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Phone</p>
                <p className="text-slate-800 font-medium">0701539773</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Location</p>
                <p className="text-slate-800 font-medium">Sri Lanka</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl">
              <div className="flex gap-4">
                <a
                  href="www.linkedin.com/in/nikinivandana"
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-white" size={24} />
                </a>
                <a
                  href="https://github.com/it21473524"
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600">
              Open to opportunities in data science, climate analytics, and GIS
            </p>
          </div>
        </div>

        <div className="mt-12 text-center text-slate-600">
          <p>© 2025 Nikini Abeywickrama. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
