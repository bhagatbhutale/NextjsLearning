const Notification = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Notifications</h1>

        {/* // Notification setting Section  */}

        <div className="mb-8">
          <h2 className="text-xl font-extrabold text-gray-700 mb-4">
            Notification Preferences
          </h2>

          <div className="space-y-4">
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-600"
              >
                Email Notification
              </label>
              <select
                className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-lg 
            shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 "
              >
                <option value="">Enable</option>
                <option value="disable">Disable</option>
              </select>
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-600"
              >
                SMS Notification
              </label>
              <select
                className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-lg 
            shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 "
              >
                <option value="">Enable</option>
                <option value="disable">Disable</option>
              </select>
            </div>

            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-600"
              >
                Push Notifications
              </label>

              <select
                className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-lg 
            shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 "
              >
                <option value="">Enable</option>
                <option value="disable">Disable</option>
              </select>
            </div>
          </div>
        </div>

        {/* // Actions Settings  */}
        <div className="flex justify-end space-x-4" >
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"> Cancel</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"> Save Changes</button>
        </div>

      </div>
    </div>
  );
}

export default Notification
