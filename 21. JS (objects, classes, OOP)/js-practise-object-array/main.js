const groups = [
  {
    id: "G101",
    name: "Frontend Wizards",
    major: "Web Development",
    averagePoint: 87.5,
    isActive: true,
    createdAt: "2024-09-01",
    membersCount: 12,
    mentor: "Emily Carter",
    shift: "Morning",
    campus: "London",
  },
  {
    id: "G102",
    name: "Backend Ninjas",
    major: "Software Engineering",
    averagePoint: 92.3,
    isActive: true,
    createdAt: "2024-10-15",
    membersCount: 10,
    mentor: "Rajesh Patel",
    shift: "Evening",
    campus: "New York",
  },
  {
    id: "G103",
    name: "Cyber Defenders",
    major: "Cyber Security",
    averagePoint: 78.9,
    isActive: false,
    createdAt: "2023-12-05",
    membersCount: 8,
    mentor: "Linda Zhao",
    shift: "Morning",
    campus: "Berlin",
  },
  {
    id: "G104",
    name: "AI Innovators",
    major: "Artificial Intelligence",
    averagePoint: 95.1,
    isActive: true,
    createdAt: "2024-11-20",
    membersCount: 6,
    mentor: "Omar Hussein",
    shift: "Afternoon",
    campus: "London",
  },
  {
    id: "G105",
    name: "Design Gurus",
    major: "UI/UX Design",
    averagePoint: 84.7,
    isActive: true,
    createdAt: "2024-08-12",
    membersCount: 11,
    mentor: "Sofia Rossi",
    shift: "Evening",
    campus: "Rome",
  },
  {
    id: "G106",
    name: "Cloud Masters",
    major: "Cloud Computing",
    averagePoint: 89.0,
    isActive: false,
    createdAt: "2024-01-25",
    membersCount: 9,
    mentor: "Carlos Mendez",
    shift: "Morning",
    campus: "Madrid",
  },
  {
    id: "G107",
    name: "Mobile Crafters",
    major: "Mobile Development",
    averagePoint: 91.6,
    isActive: true,
    createdAt: "2024-06-18",
    membersCount: 7,
    mentor: "Tina Nguyen",
    shift: "Afternoon",
    campus: "Toronto",
  },
  {
    id: "G108",
    name: "DevOps Force",
    major: "DevOps Engineering",
    averagePoint: 83.4,
    isActive: true,
    createdAt: "2023-11-10",
    membersCount: 10,
    mentor: "Mohammed Al-Karim",
    shift: "Evening",
    campus: "Dubai",
  },
  {
    id: "G109",
    name: "Full Stack Titans",
    major: "Full Stack Development",
    averagePoint: 90.2,
    isActive: true,
    createdAt: "2024-03-02",
    membersCount: 13,
    mentor: "Anna Johansson",
    shift: "Morning",
    campus: "Stockholm",
  },
  {
    id: "G110",
    name: "Data Pioneers AI",
    major: "Data Science",
    averagePoint: 88.8,
    isActive: false,
    createdAt: "2023-10-05",
    membersCount: 14,
    mentor: "Omar Hussein",
    shift: "Afternoon",
    campus: "Cairo",
  },
];

//average of all groups
const averagePoint =
  groups.reduce((acc, group) => {
    return (acc += group.averagePoint);
  }, 0) / groups.length;

//check if all groups are active (every, some)
const checkAllActive = groups.every((group) => {
  return group.isActive;
});

//find first cyber group
const firstCyberGroup = groups.find((group) => {
  return group.major == "Cyber Security";
});

// find all groups with mentor Omar Hussein
const filterGroups = groups.filter((group) => {
  return group.mentor === "Omar Hussein";
});

//sort groups by point
const sortGroupsByPoint = groups.toSorted((group1, group2) => {
  return group1.averagePoint - group2.averagePoint;
});

// find max point group and min point group
const minPointGroup = sortGroupsByPoint[0];
const maxPointGroup = sortGroupsByPoint[sortGroupsByPoint.length - 1];

//search
const input = "Ai";
const searchedGroups = groups.filter((group) => {
  return group.name.toLowerCase().trim().includes(input.toLowerCase().trim());
});

function createAndAddNewGroup() {
  const groupName = window.prompt("enter group name: ");
  const groupCampus = window.prompt("enter group campus: ");
  const groupPoint = Number(window.prompt("enter group average point: "));
  const groupMajor = window.prompt("enter group major: ");
  const isActive = window.confirm("is group still active?");
  const groupMentor = window.prompt("enter group mentor");
  const groupShift = window.prompt("enter group shift");
  const groupMemberCount = Number(window.prompt("enter group member count"));
  const id = groupName.slice(0, 1).toUpperCase() + groupMemberCount;
  const createdAt = new Date();

  const newGroup = {
    id: id,
    name: groupName,
    major: groupMajor,
    averagePoint: groupPoint,
    isActive,
    createdAt,
    membersCount: groupMemberCount,
    mentor: groupMentor,
    shift: groupShift,
    campus: groupCampus,
  };
  groups.push(newGroup);
  console.log(groups);
  return groups;
}

const studentCount = Number(
  window.prompt("how many students you want to add? ")
);
const arr = [];
while (arr.length < studentCount) {
  const studentName = window.prompt(`enter ${arr.length + 1} student name: `);
  arr.push(studentName);
}
console.log(arr);
// createAndAddNewGroup();
