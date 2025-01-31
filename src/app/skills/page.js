export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "React",
        "SQL",
        "CSS",
        "Python",
        "C",
        "Node.js",
        "Dart",
      ],
    },
    {
      title: "Programs",
      skills: [
        "Figma",
        "PowerBI",
        "ArcGis",
        "Canva",
        "SQL Developer",
        "GitHub",
        "VS Code",
        "OneIdentity",
      ],
    },
    {
      title: "Languages",
      skills: ["Finnish", "Swedish (Basics)", "English", "German (Basics)"],
    },
  ];

  return (
    <div className="bg-[#FBEED9] min-h-screen py-10 px-6 sm:px-16">
      <h1 className="text-4xl font-bold text-center mb-8 font-comfortaa">
        Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-yellow-500 p-6 rounded-lg shadow-lg text-center"
          >
            <h2 className="text-xl font-bold mb-4">{category.title}</h2>
            <div className="grid grid-cols-2 gap-x-6">
              {category.skills.map((skill) => (
                <p key={skill} className="text-lg font-medium">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
