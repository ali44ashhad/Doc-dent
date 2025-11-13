import React, { useState } from 'react';

// The team data with six members, and specific placeholder images/backgrounds
const teamMembersData = [
    {
        id: 1,
        name: 'Michael Miller',
        role: 'Lead Designer',
        imageType: 'M-Lamp',
        imageUrl: 'health1.jpg', 

    },
    {
        id: 2,
        name: 'Sarah Johnson',
        role: 'Product Manager',
        imageType: 'Succulent',
        imageUrl: 'health1.jpg', 
    },
    {
        id: 3,
        name: 'David Lee',
        role: 'Software Engineer',
        imageUrl: 'https://images.unsplash.com/photo-1510257529124-b1523491b48b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=400', 
    },
    {
        id: 4,
        name: 'Andrea Chen',
        role: 'Project Lead',
        imageUrl: 'https://images.unsplash.com/photo-1510257529124-b1523491b48b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=400', 
    },
    {
        id: 5,
        name: 'Ben Smith',
        role: 'UX Architect',
        imageType: 'Succulent',
        // --- MANUAL IMAGE URL ---
        imageUrl: 'https://images.unsplash.com/photo-1457459146522-6e27c7336146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=400',
    },
    {
        id: 6,
        name: 'Chris Evans',
        role: 'Data Scientist',
        imageUrl: 'https://images.unsplash.com/photo-1510257529124-b1523491b48b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=400', 
    },
];

export default function Teams() {
    // State to track which block is hovered.
    const [hoveredId, setHoveredId] = useState(null);

    return (
       <div className="min-h-screen bg-[#020202] p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-light text-white tracking-widest uppercase">
          Portfolio
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 tracking-widest uppercase mt-2">
          Recent Projects
        </p>
      </header>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembersData.map((member) => (
          <div
            key={member.id}
            className="relative bg-white shadow-lg overflow-hidden cursor-pointer group"
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
                hoveredId === member.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-white text-center p-4">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-lg">{member.role}</p>
                <p className="mt-4 text-sm opacity-80">
                  Click for full project details or contact info!
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};