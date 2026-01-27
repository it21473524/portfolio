import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'BSc (Hons) in Marine and Freshwater Sciences',
      specialization: 'Oceanography and Marine Geology',
      institution: 'University of Ruhuna',
      location: 'Matara',
      period: '2022-2026',
    },
    {
      degree: 'BSc (Hons) in Information Technology',
      specialization: 'Data Science',
      institution: 'SLIIT',
      location: 'Malabe',
      period: '2021 – 2025 (Completed)',
    },
    {
      degree: 'G.C.E Advanced Level Examination',
      institution: 'Bomiriya Central College',
      location: 'Kaduwela',
      period: '2018-2020',
      achievement: 'Successfully passed with 3Cs in the Physical stream',
    },
    {
      degree: 'G.C.E Ordinary Level Examination',
      institution: 'Bomiriya Central College',
      location: 'Kaduwela',
      period: '2015-2017',
      achievement: "Successfully passed with 6A's & 3B's in English medium",
    },
  ];

  const certifications = [
  {
    name: 'Tableau Certified Data Analyst Cert Prep – LinkedIn',
    file: `${import.meta.env.BASE_URL}certificates/Tableau Certified Data Analyst Cert Prep.pdf`,
  },
  {
    name: 'Power BI Projects - Great Learning Academy',
    file: `${import.meta.env.BASE_URL}certificates/Power Bi projects.pdf`,
  },
  {
    name: 'Using Large Datasets with pandas - LinkedIn',
    file: `${import.meta.env.BASE_URL}certificates/Using Large Datasets with pandas.pdf`,
  },
  {
    name: 'Building Recommendation System - Great Learning Academy',
    file: `${import.meta.env.BASE_URL}certificates/Building recommendation systems.pdf`,
  },
  {
    name: 'Data Science Foundations – Great Lakes Learning Academy',
    file: `${import.meta.env.BASE_URL}certificates/DataScience Foundations.pdf`,
  },
];


  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Education & Certifications
        </h2>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-800 mb-8 flex items-center gap-2">
            <GraduationCap className="text-emerald-600" size={28} />
            Education
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-bold text-slate-800 mb-2">
                  {edu.degree}
                </h4>

                {edu.specialization && (
                  <p className="text-emerald-600 font-medium mb-2">
                    {edu.specialization}
                  </p>
                )}

                <p className="text-slate-700 mb-1">
                  {edu.institution}, {edu.location}
                </p>

                <p className="text-slate-600 text-sm mb-2">{edu.period}</p>

                {edu.achievement && (
                  <p className="text-slate-600 text-sm italic">
                    {edu.achievement}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-800 mb-8 flex items-center gap-2">
            <Award className="text-emerald-600" size={28} />
            Professional Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-3 bg-slate-50 rounded-lg p-4 hover:bg-emerald-50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-slate-700">{cert.name}</p>
                </div>

                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-700 font-medium hover:underline whitespace-nowrap"
                >
                  View
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl p-6">
  <h3 className="text-xl font-semibold text-slate-800 mb-4">
    Languages
  </h3>

  <ul className="list-disc list-inside space-y-2 text-slate-700">
    <li>
      <span className="font-semibold text-slate-800">Sinhala:</span>{' '}
      <span className="text-slate-600">Native</span>
    </li>
    <li>
      <span className="font-semibold text-slate-800">English:</span>{' '}
      <span className="text-slate-600">Professional proficiency</span>
    </li>
  </ul>
</div>

      </div>
    </section>
  );
};

export default Education;
