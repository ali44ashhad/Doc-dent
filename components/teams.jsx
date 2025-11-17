import React, { useState } from 'react';

// Team data (images assumed in public or relative path)
const teamMembersData = [
  { id: 1, name: 'Dr Hisham Khan', role: 'Founder & CEO', imageType: 'M-Lamp', imageUrl: '../hisham.avif' },
  { id: 2, name: 'Felix Steckler', role: 'Tech Lead', imageType: 'Succulent', imageUrl: '../felix.avif' },
  { id: 3, name: 'Abdullah AlSakiti', role: 'England Lead', imageUrl: '../abdullah.avif' },
  { id: 4, name: 'Leena AlWaily', role: 'HR Lead', imageUrl: '../leena.avif' },
  { id: 5, name: `Thomas O'Brien`, role: 'UX Architect', imageType: 'Succulent', imageUrl: '../thomas.avif' },
  { id: 6, name: 'Alex Young', role: 'Customer Support Lead', imageUrl: '../alex.avif' },
];

export default function Teams() {
  // State to track which block is hovered.
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-[#020202] p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase drop-shadow-lg">
          Our Team
        </h1>

        <p className="text-base sm:text-xl text-gray-400 mt-3 max-w-xl leading-relaxed mx-auto">
          Meet the people behind our work — talented clinicians, engineers and leaders
          dedicated to delivering exceptional healthcare training and solutions. Click or hover
          on any profile to learn more about their role and expertise.
        </p>
      </header>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {teamMembersData.map((member) => (
          // make the item a column so the name sits below the card and left-aligned
          <div key={member.id} className="flex flex-col items-start">
            <div
              className="relative bg-white shadow-lg overflow-hidden cursor-pointer group w-full"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background Image Block */}
              <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-black opacity-10 transition-opacity duration-300 group-hover:opacity-0"></div>
              </div>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredId === member.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="text-white text-center p-4">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-lg">{member.role}</p>
                </div>
              </div>
            </div>

            {/* Name shown outside / below the card, left-aligned */}
            <div className="mt-3 ml-1">
              <p className="text-white font-semibold text-lg">{member.name}</p>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
