import React from 'react'

const UsersList = () => {

  const users = [
    {
      id: 1,
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Deshmukh",
      email: "priya.deshmukh@example.com",
      role: "Editor",
      status: "Pending",
    },
    {
      id: 3,
      name: "Rohan Mehta",
      email: "rohan.mehta@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 4,
      name: "Neha Kulkarni",
      email: "neha.kulkarni@example.com",
      role: "Manager",
      status: "Suspended",
    },
    {
      id: 5,
      name: "Vikram Patil",
      email: "vikram.patil@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 6,
      name: "Sonia Reddy",
      email: "sonia.reddy@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 7,
      name: "Aniket Joshi",
      email: "aniket.joshi@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 8,
      name: "Meera Nair",
      email: "meera.nair@example.com",
      role: "Viewer",
      status: "Pending",
    },
    {
      id: 9,
      name: "Rahul Verma",
      email: "rahul.verma@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 10,
      name: "Shweta Pandey",
      email: "shweta.pandey@example.com",
      role: "Manager",
      status: "Active",
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Users List</h1>

        {/* Users Table  */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-pink-400 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Role</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4">{user.name}</td>
                  <td className="py-4 px-4">{user.email}</td>
                  <td className="py-4 px-4">{user.role}</td>
                  <td className={`py-4 px-4 ${user.status === 'Active' ? 'text-green-600' : user.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'}`}>
                    {user.status}
                  </td>
                  <td className="py-2 px-2">
                    <button className=" py-2 px-4 bg-gray-200 hover:bg-gray-300 ">Edit</button>
                    <button className="ml-2  py-2 px-4 bg-amber-300 hover:bg-amber-400 ">View</button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersList
