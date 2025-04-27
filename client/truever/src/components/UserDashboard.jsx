import React from 'react';

function UserDashboard() {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    membership: 'Premium',
  };

  const items = [
    { id: 1, title: 'Item 1', details: 'Details about this item...' },
    { id: 2, title: 'Item 2', details: 'Details about this item...' },
    { id: 3, title: 'Item 3', details: 'Details about this item...' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Truever Dashboard</h1>
          <div className="flex space-x-4">
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">Home</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">Profile</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded">Logout</a>
          </div>
        </div>
      </nav>

      {/* User Dashboard */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">User Info</h2>
            <ul>
              <li className="mb-2"><strong>Name:</strong> {user.name}</li>
              <li className="mb-2"><strong>Email:</strong> {user.email}</li>
              <li className="mb-2"><strong>Membership:</strong> {user.membership}</li>
            </ul>
          </div>

          {/* Content Section */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Your Stuff</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(item => (
                <div key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
