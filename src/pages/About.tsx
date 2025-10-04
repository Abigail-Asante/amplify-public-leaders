import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Dr. Adebayo Oluwaseun",
      role: "Executive Director",
      bio: "Former Deputy Minister with 20+ years in public sector development across Africa",
    },
    {
      name: "Prof. Chinwe Eze",
      role: "Director of Programs",
      bio: "Leading academic in public policy with expertise in governance and institutional reform",
    },
    {
      name: "James Mwangi",
      role: "Director of Partnerships",
      bio: "Extensive experience building strategic partnerships with African governments and institutions",
    },
    {
      name: "Fatima Hassan",
      role: "Director of Fellows Development",
      bio: "Expert in leadership development and mentorship programs for emerging leaders",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We pursue the highest standards in leadership development and public service delivery",
    },
    {
      icon: Eye,
      title: "Integrity",
      description: "We uphold transparency, accountability, and ethical conduct in all our operations",
    },
    {
      icon: Heart,
      title: "Impact",
      description: "We measure success by the tangible improvements we create in citizens' lives",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of partnerships to drive sustainable change",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-20 bg-gradient-to-br from-primary to-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Emerging Public Leaders
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Building Africa's future through transformative leadership development
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="p-8">
                <Target className="text-primary w-12 h-12 mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To identify, develop, and support the next generation of transformational public sector leaders across Africa through world-class professional development, mentorship, and strategic placement in government institutions.
                </p>
              </Card>

              <Card className="p-8">
                <Eye className="text-accent w-12 h-12 mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  An Africa where exceptional, ethical, and innovative public sector leaders drive sustainable development, effective governance, and improved quality of life for all citizens across the continent.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6">
                  Founded in 2015, Emerging Public Leaders was born from a simple observation: Africa's public sector needed a new generation of leaders equipped with both the technical skills and ethical foundation to drive meaningful change.
                </p>
                <p className="text-muted-foreground mb-6">
                  What started as a pilot program with 24 Fellows in Kenya has grown into a pan-African initiative that has trained 534 emerging leaders across five countries. Our Fellows have gone on to implement over 250 policy reforms, directly impacting more than 15 million citizens.
                </p>
                <p className="text-muted-foreground">
                  Today, EPL is recognized as one of Africa's premier leadership development programs, with partnerships spanning government ministries, international development organizations, and academic institutions across the continent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <value.icon className="text-primary w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced leaders dedicated to developing Africa's public sector talent
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Transparency */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Transparency</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We are committed to the highest standards of financial accountability and transparency in all our operations.
              </p>
              <Card className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">78%</div>
                    <p className="text-sm text-muted-foreground">Program Services</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">12%</div>
                    <p className="text-sm text-muted-foreground">Administration</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">10%</div>
                    <p className="text-sm text-muted-foreground">Fundraising</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Annual financial reports and audited statements are available upon request.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
