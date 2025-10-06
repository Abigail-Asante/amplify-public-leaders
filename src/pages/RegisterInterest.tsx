import Navigation from "@/components/Navigation";
import React, { useState } from "react";

const RegisterInterest = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    organization: "",
    motivation: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4 py-12">
        <Navigation />

      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        {submitted ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-600">
              Thank You for Your Interest!
            </h2>
            <p className="text-gray-600">
              We’ve received your submission. The EPL team will reach out with
              updates about the next fellowship intake.
            </p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-center text-primary mb-6">
              Register Your Interest – EPL Fellowship
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Complete the form below to be notified about upcoming fellowship
              applications, events, and opportunities.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 text-gray-700"
            >
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Organization / Institution
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Why are you interested in the EPL Fellowship?
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                //   rows="4"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 rounded-lg shadow hover:bg-primary/90 transition duration-300"
              >
                Submit Interest
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterInterest;
