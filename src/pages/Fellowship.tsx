import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Calendar, Users, Award, Target } from "lucide-react";
import fellowshipImage from "@/assets/fellowship-training.jpg";

const Fellowship = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Selection & Orientation",
      duration: "2 weeks",
      description: "Rigorous application review and comprehensive orientation for selected Fellows",
    },
    {
      phase: "Phase 2",
      title: "Core Training",
      duration: "3 months",
      description: "Intensive leadership development, policy analysis, and public sector management training",
    },
    {
      phase: "Phase 3",
      title: "Mentorship & Placement",
      duration: "6 months",
      description: "Direct mentorship from senior leaders and placement in government departments",
    },
    {
      phase: "Phase 4",
      title: "Implementation Project",
      duration: "3 months",
      description: "Lead a real-world public sector transformation project with supervisor support",
    },
  ];

  const eligibility = [
    "Bachelor's degree from an accredited African university",
    "2-5 years of professional experience in public sector or related field",
    "Demonstrated commitment to public service and leadership",
    "Strong analytical and communication skills",
    "Age 25-35 years old",
    "Citizenship of an African country",
  ];

  const applicationSteps = [
    {
      step: "Step 1",
      title: "Online Application",
      description: "Complete the comprehensive application form including essays and professional references",
    },
    {
      step: "Step 2",
      title: "Initial Screening",
      description: "Applications reviewed by selection committee based on merit and potential",
    },
    {
      step: "Step 3",
      title: "Assessment Center",
      description: "Shortlisted candidates participate in group exercises and individual assessments",
    },
    {
      step: "Step 4",
      title: "Final Interview",
      description: "Panel interview with senior program leaders and government partners",
    },
    {
      step: "Step 5",
      title: "Selection & Onboarding",
      description: "Successful candidates receive offers and begin orientation process",
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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${fellowshipImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The EPL Fellowship
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              A comprehensive 12-month program designed to develop the next generation of transformational public sector leaders in Africa
            </p>
            <Link to="/register-interest">
              <Button variant="hero" size="lg">
                Apply Now – Opens February 2026
              </Button>
            </Link>
          </div>
        </section>

        {/* Program Structure */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Structure</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A carefully designed 12-month journey divided into four transformative phases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {phases.map((phase, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-primary">{phase.phase}</span>
                    <Calendar className="text-accent w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-sm text-secondary font-semibold mb-3">{phase.duration}</p>
                  <p className="text-muted-foreground">{phase.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligibility Criteria</h2>
                <p className="text-lg text-muted-foreground">
                  We seek exceptional individuals committed to transforming Africa's public sector
                </p>
              </div>

              <Card className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {eligibility.map((criterion, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
                      <p className="text-foreground">{criterion}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Application Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive selection process designed to identify the most promising candidates
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {applicationSteps.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/register-interest">
                <Button variant="hero" size="lg">
                  Start Your Application
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Fellowship Impact</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our Fellows go on to achieve remarkable success in public service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Users className="text-primary w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">534</div>
                <p className="text-muted-foreground">Total Fellows</p>
              </Card>
              <Card className="p-6 text-center">
                <Award className="text-secondary w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold text-secondary mb-2">89%</div>
                <p className="text-muted-foreground">Career Advancement</p>
              </Card>
              <Card className="p-6 text-center">
                <Target className="text-accent w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold text-accent mb-2">250+</div>
                <p className="text-muted-foreground">Policy Initiatives</p>
              </Card>
              <Card className="p-6 text-center">
                <CheckCircle className="text-primary w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Completion Rate</p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Fellowship;
