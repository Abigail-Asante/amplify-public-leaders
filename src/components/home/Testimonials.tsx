import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amara Okafor",
      role: "Senior Policy Advisor, Ministry of Education",
      country: "Nigeria",
      quote: "The EPL Fellowship transformed my approach to public service. The practical skills and network I gained have been invaluable in driving meaningful policy reforms.",
    },
    {
      name: "Kwame Mensah",
      role: "Director of Public Affairs",
      country: "Ghana",
      quote: "EPL provided me with the tools to bridge the gap between policy and implementation. The mentorship from senior leaders was exceptional.",
    },
    {
      name: "Dr. Sarah Kamau",
      role: "Deputy Minister, Health Department",
      country: "Kenya",
      quote: "Through EPL, I connected with peers across Africa facing similar challenges. This network continues to be a source of innovation and support.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Fellows Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from graduates who are making a difference in Africa's public sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow relative">
              <Quote className="text-secondary opacity-20 w-12 h-12 absolute top-4 right-4" />
              <p className="text-foreground/90 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-accent">{testimonial.country}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
