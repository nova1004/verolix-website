import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "@/components/auth/AuthForm";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BMICalculator from "@/components/BMICalculator";
import FeaturePopup from "@/components/FeaturePopup";
import { 
  Heart, Shield, FilePlus, Share2, Activity, ArrowRight, ChevronRight, 
  Calendar, Stethoscope, Calculator, Database, Utensils, BookOpen, 
  TrendingUp, BarChart2 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [{
  title: "Schedule Appointments",
  description: "Book and manage your medical appointments with ease.",
  icon: <Calendar className="h-6 w-6" />
}, {
  title: "Access Medical Records",
  description: "View and share your complete medical history securely.",
  icon: <FilePlus className="h-6 w-6" />
}, {
  title: "Connect with Doctors",
  description: "Communicate directly with your healthcare providers.",
  icon: <Stethoscope className="h-6 w-6" />
}];

const healthFeatures = [
  {
    id: 1,
    title: "BMI Calculator",
    description: "Instantly calculate your Body Mass Index to track your fitness journey.",
    icon: <Calculator className="h-6 w-6 text-healthcare-600" />
  },
  {
    id: 2,
    title: "Health Data Storage",
    description: "Securely store and access all your health records in one place.",
    icon: <Database className="h-6 w-6 text-healthcare-600" />
  },
  {
    id: 3,
    title: "Nutrition Planner",
    description: "Personalized diet recommendations for your health goals.",
    icon: <Utensils className="h-6 w-6 text-healthcare-600" />
  },
  {
    id: 4,
    title: "Health Explore Page",
    description: "Discover articles, advice, and wellness tips for a healthier life.",
    icon: <BookOpen className="h-6 w-6 text-healthcare-600" />
  },
  {
    id: 5,
    title: "Streak Counter",
    description: "Stay motivated by tracking your healthy habits streaks.",
    icon: <TrendingUp className="h-6 w-6 text-healthcare-600" />
  },
  {
    id: 6,
    title: "Graphical Analysis",
    description: "Visualize your health progress through beautiful and informative charts.",
    icon: <BarChart2 className="h-6 w-6 text-healthcare-600" />
  }
];

export default function Index() {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState<null | number>(null);
  
  useEffect(() => {
    const user = localStorage.getItem("verolix-user");
    if (user) {
      const userData = JSON.parse(user);
      if (userData.role === "patient") {
        navigate("/patient-dashboard");
      } else if (userData.role === "doctor") {
        navigate("/doctor-dashboard");
      }
    }
  }, [navigate]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  // Handle popup open/close
  const openFeaturePopup = (featureId: number) => {
    setSelectedFeature(featureId);
  };
  
  const closeFeaturePopup = () => {
    setSelectedFeature(null);
  };
  
  // Find the currently selected feature
  const currentFeature = healthFeatures.find(feature => feature.id === selectedFeature);
  
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-healthcare-800 to-healthcare-600 text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                  Your Health Records, <span className="text-healthcare-200">Simplified</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 text-healthcare-50">
                  Verolix connects patients and doctors through seamless health record management.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button size="lg" className="bg-white text-healthcare-700 hover:bg-healthcare-100 group transition-all duration-300" onClick={() => document.getElementById("auth-section")?.scrollIntoView({
                  behavior: "smooth"
                })}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-healthcare-600/20 to-healthcare-800/20 rounded-lg" />
                  <div className="bg-white p-5 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=870" alt="Doctor and patient discussing health records" className="w-full h-auto rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Features List */}
            <div className="mt-16 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                {features.map((feature, index) => <div key={index} className={`flex items-center space-x-4 py-3 ${index === activeFeature ? 'opacity-100' : 'opacity-60'} transition-opacity duration-300`}>
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-healthcare-50">{feature.description}</p>
                    </div>
                    <ChevronRight className={`ml-auto h-5 w-5 transform transition-transform duration-300 ${index === activeFeature ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* BMI Calculator Section */}
        <section className="py-16 bg-healthcare-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Check Your BMI
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Use our BMI calculator to check your body mass index and get instant results
              </p>
            </div>
            <BMICalculator />
          </div>
        </section>
        
        {/* App Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block p-3 bg-healthcare-100 rounded-full mb-4">
                <Heart className="h-8 w-8 text-healthcare-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Verolix Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover the powerful tools designed to simplify your healthcare journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {healthFeatures.map((feature) => (
                <div 
                  key={feature.id}
                  onClick={() => openFeaturePopup(feature.id)}
                  className="bg-healthcare-50 hover:bg-healthcare-100 p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group"
                >
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-healthcare-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">Click to learn more</p>
                </div>
              ))}
            </div>
            
            {/* Feature Popup */}
            {currentFeature && (
              <FeaturePopup
                title={currentFeature.title}
                description={currentFeature.description}
                icon={currentFeature.icon}
                isOpen={selectedFeature !== null}
                onClose={closeFeaturePopup}
              />
            )}
          </div>
        </section>

        {/* Features Tabs Section */}
        <section className="py-16 bg-healthcare-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Verolix</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the future of healthcare management with our comprehensive features.
              </p>
            </div>

            <Tabs defaultValue="security" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="security" className="flex items-center">
                  <Shield className="mr-2 h-4 w-4" />
                  Security
                </TabsTrigger>
                <TabsTrigger value="upload">
                  <FilePlus className="mr-2 h-4 w-4" />
                  Easy Upload
                </TabsTrigger>
                <TabsTrigger value="sharing">
                  <Share2 className="mr-2 h-4 w-4" />
                  Sharing
                </TabsTrigger>
                <TabsTrigger value="history">
                  <Activity className="mr-2 h-4 w-4" />
                  History
                </TabsTrigger>
              </TabsList>

              <TabsContent value="security" className="space-y-4">
                <div className="bg-healthcare-50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Bank-Level Security</h3>
                  <p className="text-gray-600">
                    Your health data is protected with state-of-the-art encryption and security measures. We employ the same security standards used by leading financial institutions.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Shield className="h-5 w-5 mr-2 text-healthcare-600" />
                      End-to-end encryption
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Shield className="h-5 w-5 mr-2 text-healthcare-600" />
                      Regular security audits
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Shield className="h-5 w-5 mr-2 text-healthcare-600" />
                      HIPAA compliant storage
                    </li>
                  </ul>
                </div>
              </TabsContent>

              {/* Add similar detailed content for other tabs */}
              <TabsContent value="upload" className="space-y-4">
                <div className="bg-healthcare-50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Effortless Document Uploads</h3>
                  <p className="text-gray-600">
                    Quickly and easily upload your medical records, prescriptions, and test results. Our intuitive interface makes managing your documents a breeze.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-700">
                      <FilePlus className="h-5 w-5 mr-2 text-healthcare-600" />
                      Drag-and-drop functionality
                    </li>
                    <li className="flex items-center text-gray-700">
                      <FilePlus className="h-5 w-5 mr-2 text-healthcare-600" />
                      Support for multiple file formats
                    </li>
                    <li className="flex items-center text-gray-700">
                      <FilePlus className="h-5 w-5 mr-2 text-healthcare-600" />
                      Automatic file categorization
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="sharing" className="space-y-4">
                <div className="bg-healthcare-50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Secure Record Sharing</h3>
                  <p className="text-gray-600">
                    Instantly share your medical records with healthcare providers using your unique patient ID. Control who has access to your information.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Share2 className="h-5 w-5 mr-2 text-healthcare-600" />
                      One-click sharing with doctors
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Share2 className="h-5 w-5 mr-2 text-healthcare-600" />
                      Customizable permission levels
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Share2 className="h-5 w-5 mr-2 text-healthcare-600" />
                      Access logs to monitor activity
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="history" className="space-y-4">
                <div className="bg-healthcare-50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Complete Health History</h3>
                  <p className="text-gray-600">
                    Maintain a comprehensive record of your health journey, including visits, diagnoses, medications, and test results over time.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Activity className="h-5 w-5 mr-2 text-healthcare-600" />
                      Lifetime health timeline
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Activity className="h-5 w-5 mr-2 text-healthcare-600" />
                      Advanced search capabilities
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Activity className="h-5 w-5 mr-2 text-healthcare-600" />
                      Health trend analysis
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Auth Section */}
        <section id="auth-section" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
                <p className="text-gray-600">Create an account or log in to access your health records</p>
              </div>
              <AuthForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}