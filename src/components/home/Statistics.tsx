import { Users, Globe, Award, TrendingUp } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      number: "534",
      label: "Fellows Trained",
      color: "text-primary",
    },
    {
      icon: Globe,
      number: "5",
      label: "Countries Engaged",
      color: "text-accent",
    },
    {
      icon: Award,
      number: "89%",
      label: "Career Advancement",
      color: "text-secondary",
    },
    {
      icon: TrendingUp,
      number: "15+",
      label: "Government Partners",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable results that demonstrate our commitment to developing Africa's public sector leadership
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <stat.icon className={`${stat.color} w-12 h-12 mx-auto mb-4`} />
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
