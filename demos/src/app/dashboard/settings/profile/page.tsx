
const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Profile Settings
        </h1>

        {/* // Profile Picture Settings  */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Picure
          </h2>

          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 bg-gray-300 rounded-full ">
              <img
                src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <div>
            <button className="bg-blue-500 text-white px-6 py-2 mt-5 rounded-lg hover:bg-blue-700 transition-colors">
              Change Picture
            </button>
          </div>
        </section>

        {/* // Profile Information Section  */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Information
          </h2>

          <div className="space-y-4">
            <div>
              <label
                className="block text-sm text-gray-600 font-medium mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                defaultValue=""
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Full name"
              />
            </div>

            <div>
              <label
                className="block text-sm text-gray-600 font-medium mb-2"
                htmlFor="username"
              >
                User Name
              </label>
              <input
                type="text"
                defaultValue=""
                id="username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your User name"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </section>
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
  );
}

export default Profile;
