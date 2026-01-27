import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Professional Experience
        </h2>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-emerald-600"></div>

          <div className="relative mb-8 md:mb-0">
            <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
              <div className="flex-1 md:pr-8 md:text-right">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4 flex-col md:flex-row">
                    <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                      <Briefcase className="text-emerald-600" size={24} />
                      Data Science & Machine Learning Intern
                    </h3>
                  </div>
                  <p className="text-lg font-semibold text-emerald-600 mb-2">
                    Bluechip Technologies Asia
                  </p>
                  <div className="flex items-center gap-2 text-slate-600 mb-4 justify-center md:justify-end">
                    <Calendar size={16} />
                    <span>June 2024 – January 2025</span>
                  </div>
                  <ul className="text-slate-700 space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Analyzed and prepared datasets using Python and SQL to support analytics, reporting, and model development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Built dashboards and visual reports using Power BI and Grafana to monitor system metrics and trends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Supported predictive, time-series, and anomaly detection analysis using DataRobot, contributing to data-driven decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Automated data preprocessing and validation workflows in Python, reducing manual effort and improving data quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Collaborated with cross-functional teams to review analytical outputs and communicate insights clearly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
