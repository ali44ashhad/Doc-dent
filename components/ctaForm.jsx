"use client"


export default function ContactAndFollowSection() {
  return (
 
    <div className="bg-gray-900 text-white min-h-[450px] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

        {/* --- 1. Left Section: Follow Us (Image Background) --- */}
        <div className="relative flex flex-col justify-center py-16 px-8 lg:min-h-[500px] overflow-hidden">
          
          <div className="absolute inset-0 z-0">
        
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30" 
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?fit=crop&w=800&q=80')` }}
              aria-hidden="true"
            ></div>
            {/* Darker gradient on the left half to replicate the image's effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          </div>
          
          {/* Content Overlays the background image */}
          <div className="relative z-10">
            <p className="text-sm tracking-widest uppercase mb-4 text-gray-400">
              Keep In Touch
            </p>
            <h2 className="text-6xl sm:text-7xl font-extrabold mb-12 uppercase leading-none">
              Follow Us
            </h2>
            
            {/* Social Media Links: Grid for the 4-column layout */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 max-w-xs">
              {['FACEBOOK', 'TWITTER', 'PINTEREST', 'INSTAGRAM'].map((social) => (
                <a 
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  className="uppercase text-sm font-medium hover:text-teal-400 transition duration-300 tracking-wider"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- 2. Right Section: Contact Form --- */}
        <div className="py-8 lg:py-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 uppercase tracking-wide">
            Drop A Line
          </h2>

          <form className="space-y-6">
            
            {/* Name and Email Row (2 columns on large screens) */}
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4">
              <input 
                type="text" 
                placeholder="Your name here"
                className="w-full p-4 bg-gray-800 border border-gray-700 focus:border-teal-400 focus:outline-none placeholder-gray-400 transition duration-300"
              />
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full p-4 bg-gray-800 border border-gray-700 focus:border-teal-400 focus:outline-none placeholder-gray-400 transition duration-300"
              />
            </div>

            {/* Subject Field (Full width) */}
            <input 
              type="text" 
              placeholder="Subject"
              className="w-full p-4 bg-gray-800 border border-gray-700 focus:border-teal-400 focus:outline-none placeholder-gray-400 transition duration-300"
            />

            {/* Message Textarea (Full width) */}
            <textarea 
              rows="6"
              placeholder="Your message"
              className="w-full p-4 bg-gray-800 border border-gray-700 focus:border-teal-400 focus:outline-none placeholder-gray-400 transition duration-300 resize-none"
            ></textarea>

            {/* Submit Button */}
            <button 
              type="submit"
              className="px-8 py-3 mt-4 text-sm font-medium tracking-widest uppercase 
                         bg-transparent border border-white hover:bg-teal-400 hover:border-teal-400 
                         transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

