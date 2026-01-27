const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">
          Professional Summary
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-slate-700 leading-relaxed text-lg text-justify">
            Recent Data Science graduate with hands-on experience in data analytics,
            predictive modeling, and geospatial analysis. Holds dual BSc (Hons) degrees
            in <strong>Marine and Freshwater Sciences (Oceanography & Marine Geology)</strong> and{' '}
            <strong>Information Technology (Data Science)</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed text-lg mt-4 text-justify">
            Skilled in Python, R, SQL, GIS, and remote sensing data processing with
            experience in climate risk, hazard mapping, and spatial data integration.
            Analytical, detail-oriented, and motivated to support climate resilience
            and risk assessment projects in agriculture, water, and disaster management sectors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
