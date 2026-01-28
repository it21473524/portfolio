import { FolderGit2, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Predictive Analysis of Treasury Bill Risk and Yield',
      description:
        'Developed a hybrid predictive model using econometrics and machine learning to forecast Treasury Bill yields and assess associated financial risks in Sri Lanka',
      tags: ['Machine Learning', 'Econometrics', 'Financial Analysis', 'Python'],
    },
    {
      title: 'Monitoring Book API with Prometheus & Grafana',
      description:
        'Implemented a RESTful Book API with real-time monitoring and visualization dashboards',
      tags: ['API Development', 'Monitoring', 'Grafana', 'DevOps'],
      github:
        'https://github.com/IT21306518/Monitoring-Book-API-with-Prometheus-and-Grafana',
    },
    {
      title: 'Car Price Prediction System',
      description:
        'Building a machine learning model to predict car prices in Sri Lanka based on key features',
      tags: ['Machine Learning', 'Predictive Modeling', 'Python', 'Data Analysis'],
      github: 'https://github.com/IT21306518/Fdm_Project',
    },
    {
      title: 'Smart Sleep Monitoring System',
      description:
        'Built an IoT-based system to monitor sleep patterns and vital signs with predictive analytics',
      tags: ['IoT', 'Predictive Analytics', 'Health Tech', 'Python'],
      github:
        'https://github.com/IOTBDA2025/iot-data-collection-and-analysis-project-2025_37',
    },
    {
      title: 'Smart Transit – Bus Self-Care App',
      description:
        'Developed a mobile app for real-time bus tracking, ticket booking, and multi-modal travel planning',
      tags: ['Mobile Development', 'Real-time Tracking', 'Transportation', 'UX Design'],
      github: 'https://github.com/it21473524/SmartTransit-BusApp',
    },
    {
      title: 'Hospital Management System',
      description:
        'Developed a full-stack MERN system for appointments, billing, inventory, and staff management',
      tags: ['Full Stack', 'MERN', 'Healthcare', 'Database Design'],
      github: 'https://github.com/IT21248030/Hospital_Management_System',
    },
    {
      title: 'Customer Churn Analysis Dashboard',
      description:
        'PAn end to end Power BI project analyzing bank customer churn, including data preparation, modeling, DAX calculations, and interactive dashboard creation, published to Power BI Service',
      tags: ['Power BI', 'Data Visualization', 'Dashboard Design', 'Data Modeling', 'Report Publishing (Power BI Service)', 'Business Insights & Analytics', 'KPI Analysis'],
      github: 'https://github.com/it21473524/Customer-Churn-Analysis',
    }
  ]
  return (
    <section id="projects" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-4">
                <FolderGit2 className="text-emerald-600" size={32} />
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink
                      className="text-slate-400 group-hover:text-emerald-600 transition-colors"
                      size={20}
                    />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
