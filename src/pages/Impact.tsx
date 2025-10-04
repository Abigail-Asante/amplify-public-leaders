import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Building, Award } from "lucide-react";
import partnershipImage from "@/assets/partnership.jpg";

const Impact = () => {
  const successStories = [
    {
      title: "Digital Transformation in Education",
      country: "Kenya",
      fellow: "Dr. Sarah Kamau",
      description: "Led the implementation of a nationwide e-learning platform reaching 2.5 million students across rural and urban areas, significantly improving access to quality education.",
      impact: "2.5M students reached",
    },
    {
      title: "Healthcare System Reform",
      country: "Ghana",
      fellow: "Kwame Mensah",
      description: "Designed and implemented a community health worker program that reduced maternal mortality by 35% in underserved regions through improved prenatal care access.",
      impact: "35% reduction in maternal mortality",
    },
    {
      title: "Public Procurement Transparency",
      country: "Nigeria",
      fellow: "Amara Okafor",
      description: "Developed an open data platform for government contracts that increased transparency and saved $45M in public funds through competitive bidding improvements.",
      impact: "$45M saved in public funds",
    },
  ];

  const governmentPartners = [
    {
      country: "Kenya",
      initiatives: "15 active policy initiatives",
      fellows: "142 Fellows placed",
    },
    {
      country: "Ghana",
      initiatives: "12 active policy initiatives",
      fellows: "98 Fellows placed",
    },
    {
      country: "Nigeria",
      initiatives: "22 active policy initiatives",
      fellows: "186 Fellows placed",
    },
    {
      country: "Rwanda",
      initiatives: "8 active policy initiatives",
      fellows: "64 Fellows placed",
    },
    {
      country: "Tanzania",
      initiatives: "6 active policy initiatives",
      fellows: "44 Fellows placed",
    },
  ];

  const metrics = [
    {
      icon: TrendingUp,
      value: "$180M+",
      label: "Economic Impact Generated",
      color: "text-primary",
    },
    {
      icon: Users,
      value: "15M+",
      label: "Citizens Directly Impacted",
      color: "text-accent",
    },
    {
      icon: Building,
      value: "85",
      label: "Government Departments Engaged",
      color: "text-secondary",
    },
    {
      icon: Award,
      value: "250+",
      label: "Policy Reforms Implemented",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${partnershipImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Impact Across Africa
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transforming public service delivery through exceptional leadership and evidence-based policy reform
            </p>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Results</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our Fellows drive tangible improvements in public sector effectiveness
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow">
                  <metric.icon className={`${metric.color} w-12 h-12 mx-auto mb-4`} />
                  <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <p className="text-muted-foreground font-medium">{metric.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real-world impact from EPL Fellows transforming their communities
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                      {story.country}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{story.fellow}</p>
                  <p className="text-muted-foreground mb-4">{story.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-secondary font-bold text-lg">{story.impact}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Government Partners */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner Governments</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Collaborative partnerships driving public sector excellence across Africa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {governmentPartners.map((partner, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-primary mb-4">{partner.country}</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{partner.initiatives}</p>
                    <p className="text-sm font-semibold text-accent">{partner.fellows}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
