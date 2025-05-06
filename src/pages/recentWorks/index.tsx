import {} from "react";
import Card from "../../components/Card";

function Works() {
  const works = [
    { title: "Project 1", description: "Description of project 1" },
    { title: "Project 2", description: "Description of project 2" },
    { title: "Project 3", description: "Description of project 3" },
    { title: "Project 4", description: "Description of project 4" },
    { title: "Project 5", description: "Description of project 5" },
    { title: "Project 6", description: "Description of project 6" },
  ];

  return (
    <div className="flex bg-primary-background min-h-screen items-center justify-center p-4 px-10 py-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-x-20 max-w-4xl w-full mx-auto">
        {works.map((work, index) => (
          <Card key={index}>
            <h2 className="text-xl font-bold">{work.title}</h2>
            <p className="text-gray-700">{work.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Works;
