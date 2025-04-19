import { Heart, Users } from "lucide-react";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Lakshya Raj Malviya",
      role: "UI/UX Designer & Team Leader, App Developer (Flutter, Java)",
      image: "https://ui-avatars.com/api/?name=Lakshya+Raj+Malviya&background=E0EEFF&color=1A56DB"
    },
    {
      name: "Mitali Mehra",
      role: "Canva, Figma, UI/UX, Frontend Specialist",
      image: "https://ui-avatars.com/api/?name=Mitali+Mehra&background=E6F7F2&color=047857"
    },
    {
      name: "Kaushik Barnwal",
      role: "Backend Developer (React, JS, Node.js)",
      image: "https://ui-avatars.com/api/?name=Kaushik+Barnwal&background=FEF3E8&color=D97706"
    },
    {
      name: "Himang Sahu",
      role: "Database Engineer (Firebase, Cloudinary)",
      image: "https://ui-avatars.com/api/?name=Himang+Sahu&background=F0E9FA&color=7C3AED"
    },
    {
      name: "Krishna Katiyar",
      role: "Frontend Developer (Tailwind, Bootstrap 5)",
      image: "https://ui-avatars.com/api/?name=Krishna+Katiyar&background=FFEDE8&color=DC2626"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-healthcare-100 rounded-full mb-4">
            <Heart className="h-8 w-8 text-healthcare-600" />
          </div>
          <h1 className="text-4xl font-bold text-healthcare-800 mb-6">About Verolix</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-healthcare-700">Who We Are</h2>
            <p className="text-gray-600">
              Verolix is a healthcare app designed to simplify personal health management.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-healthcare-700">Vision</h2>
            <p className="text-gray-600">
              A healthier world, one app at a time.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-healthcare-100 rounded-full mb-4">
              <Users className="h-8 w-8 text-healthcare-600" />
            </div>
            <h2 className="text-3xl font-semibold text-healthcare-700 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals behind Verolix
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 mx-auto">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-healthcare-100 transition-transform duration-300 transform group-hover:scale-105">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-healthcare-800">{member.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
