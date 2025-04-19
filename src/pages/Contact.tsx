import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear the error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {
      name: formData.name ? "" : "Name is required",
      email: formData.email ? (validateEmail(formData.email) ? "" : "Please enter a valid email") : "Email is required",
      message: formData.message ? "" : "Message is required"
    };
    
    setErrors(newErrors);
    
    // Check if form is valid
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      // In a real app, you would submit the form data to your backend
      console.log("Form submitted:", formData);
      setSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-healthcare-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with our team for support or inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-healthcare-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">support@verolix.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-healthcare-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">+91 123-456-7890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-healthcare-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600">
                  Acropolis Institute Of Technology And Research - AITR<br />
                  Indore, Madhya Pradesh
                </p>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="mt-8 h-[300px] rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2999411584757!2d75.86921941120642!3d22.72023697902144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0b7d3bdf89%3A0x11b1311c2e715eda!2sAcropolis%20Institute%20of%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1698924271252!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-800">Message Sent!</h3>
                  <p className="text-green-700">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form className="space-y-6 bg-white p-8 rounded-lg shadow-sm" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full rounded-md border ${errors.name ? 'border-red-300' : 'border-gray-300'} px-4 py-3 shadow-sm focus:border-healthcare-500 focus:ring-healthcare-500`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" /> {errors.name}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full rounded-md border ${errors.email ? 'border-red-300' : 'border-gray-300'} px-4 py-3 shadow-sm focus:border-healthcare-500 focus:ring-healthcare-500`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" /> {errors.email}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`block w-full rounded-md border ${errors.message ? 'border-red-300' : 'border-gray-300'} px-4 py-3 shadow-sm focus:border-healthcare-500 focus:ring-healthcare-500`}
                    placeholder="Your message"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" /> {errors.message}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-healthcare-600 hover:bg-healthcare-700 text-white py-3"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
