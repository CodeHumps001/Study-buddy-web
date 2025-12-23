const mockSessions = [
  {
    id: 1,
    hostName: "Yaw Fosu",
    courseName: "Data Structures",
    reason:
      "Preparing for the mid-semester exam and practicing linked list problems together.",
    sessionDate: "2025-02-15T16:00:00",
    createdAt: "2025-02-10T10:30:00",
    attendees: [
      { id: 1, name: "Yaw Fosu" },
      { id: 2, name: "Kwame Mensah" },
    ],
  },
  {
    id: 2,
    hostName: "Ama Serwaa",
    courseName: "Database Systems",
    reason: "Group discussion on normalization, ER diagrams, and SQL queries.",
    sessionDate: "2025-02-18T14:00:00",
    createdAt: "2025-02-12T09:00:00",
    attendees: [{ id: 3, name: "Ama Serwaa" }],
  },
  {
    id: 3,
    hostName: "Kojo Antwi",
    courseName: "Web Development",
    reason:
      "Collaborative practice on React components, props, and state management.",
    sessionDate: "2025-02-20T17:30:00",
    createdAt: "2025-02-13T18:45:00",
    attendees: [],
  },
];

export default mockSessions;
