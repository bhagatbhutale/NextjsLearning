const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Complete Project Proposal",
      description:
        "Draft and finalize the project proposal document for the new client.",
      status: "In Progress",
      dueDate: "2025-07-30",
    },
    {
      id: 2,
      title: "Team Meeting",
      description: "Discuss upcoming sprint tasks and assign responsibilities.",
      status: "Pending",
      dueDate: "2025-07-28",
    },
    {
      id: 3,
      title: "Fix Login Bug",
      description:
        "Resolve the authentication issue causing login failures for some users.",
      status: "Completed",
      dueDate: "2025-07-25",
    },
    {
      id: 4,
      title: "Write Blog Post",
      description:
        "Prepare a technical blog on React performance optimization tips.",
      status: "In Progress",
      dueDate: "2025-08-01",
    },
    {
      id: 5,
      title: "Database Backup",
      description: "Perform full backup of the production database.",
      status: "Pending",
      dueDate: "2025-07-29",
    },
    {
      id: 6,
      title: "UI Review",
      description:
        "Review and provide feedback on the new dashboard UI design.",
      status: "Completed",
      dueDate: "2025-07-26",
    },
    {
      id: 7,
      title: "Update Documentation",
      description: "Update the API documentation with the latest endpoints.",
      status: "Pending",
      dueDate: "2025-08-03",
    },
    {
      id: 8,
      title: "Client Feedback Session",
      description:
        "Conduct a feedback session with the client regarding the latest release.",
      status: "In Progress",
      dueDate: "2025-07-31",
    },
    {
      id: 9,
      title: "Code Review",
      description: "Review pull requests for the new feature branch.",
      status: "Pending",
      dueDate: "2025-07-27",
    },
    {
      id: 10,
      title: "Prepare Presentation",
      description: "Create a presentation for the upcoming tech meetup.",
      status: "Pending",
      dueDate: "2025-08-05",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 
     p-8 "
    >
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tasks</h1>

        {/* // Tasks  */}
        <section className="space-y-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-white rounded-lg 
           shadow-md p-6 border-l-4 "
              style={{
                borderColor:
                  task.status === "Completed"
                    ? "green"
                    : task.status === "In Progress"
                    ? "yellow"
                    : "red",
              }}
            >
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">{task.title}</h2>
                <p className="text-gray-600">{task.description}</p>
                <span className="text-sm text-gray-500">{task.dueDate}</span>
              </div>
              <section className="flex space-x-4">
                <span
                  className={`text-sm px-4 py-3 rounded-full font-medium ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : task.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {task.status}
                </span>

                {/* // Buttons  */}
                <button className="
                 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 " 
                >Edit</button>

                {
                  task.status === "Completed" && (
                    <button className="
                     px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 " 
                    >Mark as Completed</button>
                  )
                }

                <button className="
                 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 " 
                >Delete</button>

              </section>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Tasks;
