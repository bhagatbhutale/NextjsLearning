
const Analytics = () => {

  const metrics =
    [
      {
        title: "Total Users",
        value: 4523,
        change: 12.5,
        isPositive: true,
      },
      {
        title: "Active Users",
        value: 3241,
        change: 8.2,
        isPositive: true,
      },
      {
        title: "New Signups",
        value: 210,
        change: -3.5,
        isPositive: false,
      },
      {
        title: "Revenue",
        value: 15890,
        change: 14.7,
        isPositive: true,
      },
      {
        title: "Churn Rate",
        value: 4.2,
        change: 1.1,
        isPositive: false,
      },
      {
        title: "Sessions",
        value: 8765,
        change: 6.4,
        isPositive: true,
      },
      {
        title: "Conversion Rate",
        value: 3.8,
        change: -0.6,
        isPositive: false,
      },
      {
        title: "Average Session Time",
        value: 5.4,
        change: 0.9,
        isPositive: true,
      },
      {
        title: "Orders Completed",
        value: 1278,
        change: 10.1,
        isPositive: true,
      },
      {
        title: "Refund Requests",
        value: 35,
        change: -2.4,
        isPositive: true,
      },
    ]
  

  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8 ">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Analytics Dashboard
        </h1>

        {/* // Overview Metrics Section  */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex justify-between items-center bg-white rounded-lg shadow-md p-6 border-l-4 ${
                metric.isPositive ? "border-green-500" : "border-red-500"
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  {metric.title}
                </h3>
                <p className="text-lg text-gray-600">{metric.value}</p>
              </div>

              <div className="text-right">
                <p
                  className={`text-lg font-semibold ${
                    metric.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {metric.change}%
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* // Charts Section  */}

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Charts</h2>

          <div className="bg-gray-100 rounded-lg h-72">Charts PlaceHolder</div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Charts</h2>

          <div className="bg-gray-100 rounded-lg h-72">Charts PlaceHolder</div>
        </div>

        {/* // Recent Activities  */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Activities
          </h2>

          <ul className="space-y-4">
            <li className="text-gray-600 flex items-center justify-between bg-white rounded-lg shadow-md p-4 ">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  User Registration
                </h3>
                <p className="text-sm text-gray-600">
                  New User SignUp up on 2025-07-20
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">+10 Users</p>
              </div>
            </li>

            <li className="text-gray-600 flex items-center justify-between bg-white rounded-lg shadow-md p-4 ">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Sales Increase
                </h3>
                <p className="text-sm text-gray-600">
                  Sales grew by 12% on 2025-07-20
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">$15,000</p>
              </div>
            </li>

            <li className="text-gray-600 flex items-center justify-between bg-white rounded-lg shadow-md p-4 ">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Website Traffic Surge
                </h3>
                <p className="text-sm text-gray-600">
                  Traffic Increase by 8% 2025-07-25
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">+200</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
