const UsersDetails = () => {
  const user = {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    role: "Admin",
    status: "Active",
    bio: "Full Stack Developer with a passion for building scalable web applications.",
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1hfIQwWxRw-oBZ-xwjsmA5n1CyrwaYnM7JA&s",
    activities: [
      {
        id: 1,
        description: "Logged in to the dashboard",
        timestamp: "2025-07-27T09:15:23Z",
      },
      {
        id: 2,
        description: "Created a new project: Analytics Tracker",
        timestamp: "2025-07-26T14:32:10Z",
      },
      {
        id: 3,
        description: "Updated user roles for 3 team members",
        timestamp: "2025-07-25T18:45:05Z",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="flex items-center mb-8">
          <img
            src={user.profilePicture}
            alt="UserProfilePic"
            className="w-20 h-20 rounded-full object-cover mr-6"
          />

          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.role}</p>
            <p
              className={`text-sm mt-2 ${
                user.status === "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              Status : {user.status}
            </p>
          </div>
        </div>

        {/* // Bio Section  */}

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">About</h2>
          <p className="text-gray-600">{user.bio}</p>
        </div>

        {/* // Activities Timelile */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4"></h2>
          <ul className="space-y-4">
            {user.activities.map((activity) => (
              <li key={activity.id} className="flex items-center space-x-4">
                <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <span>A</span>
                </div>

                <div>
                  <p className="text-gray-700">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* // Actions Settings  */}
          <div className="flex justify-end space-x-4">
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              {" "}
              Cancel
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              {" "}
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersDetails;
