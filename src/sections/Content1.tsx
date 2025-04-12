import { FaPalette, FaLightbulb, FaMagic } from 'react-icons/fa'; // Make sure to install react-icons

export default function Content1() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 py-20 relative">
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                <span className="inline-block">✨ Designs That Speak</span>
                <span className="text-purple-600 block">Louder Than Words</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that great design isn't just about looking good — it's about telling your story. Whether you're launching a brand or promoting an event, our designs are crafted to make a bold and lasting impression.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed italic">
                Let your logo scream identity, your posters sell without saying a word, and your business card leave a memory long after the handshake.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <FaPalette className="text-purple-500 text-3xl mb-4" />
                <h3 className="font-semibold text-gray-800">Creative Design</h3>
                <p className="text-sm text-gray-600 mt-2">Unique and memorable visual solutions</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <FaLightbulb className="text-yellow-500 text-3xl mb-4" />
                <h3 className="font-semibold text-gray-800">Brand Identity</h3>
                <p className="text-sm text-gray-600 mt-2">Cohesive and impactful branding</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <FaMagic className="text-pink-500 text-3xl mb-4" />
                <h3 className="font-semibold text-gray-800">Visual Magic</h3>
                <p className="text-sm text-gray-600 mt-2">Stunning visual experiences</p>
              </div>
            </div>
          </div>

          {/* Right column - Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              {/* Image placeholder 1 */}
              <div className="aspect-square bg-purple-100 rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                {/* Replace with: <img src="/path-to-your-image" alt="Design showcase 1" className="w-full h-full object-cover" /> */}
              </div>
              
              {/* Image placeholder 2 */}
              <div className="aspect-video bg-pink-100 rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                {/* Replace with: <img src="/path-to-your-image" alt="Design showcase 2" className="w-full h-full object-cover" /> */}
              </div>
            </div>
            
            <div className="space-y-4 pt-8">
              {/* Image placeholder 3 */}
              <div className="aspect-video bg-yellow-100 rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                {/* Replace with: <img src="/path-to-your-image" alt="Design showcase 3" className="w-full h-full object-cover" /> */}
              </div>
              
              {/* Image placeholder 4 */}
              <div className="aspect-square bg-blue-100 rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                {/* Replace with: <img src="/path-to-your-image" alt="Design showcase 4" className="w-full h-full object-cover" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
