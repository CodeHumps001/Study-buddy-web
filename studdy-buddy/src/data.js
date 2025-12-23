const mockSessions = [
  {
    id: 1,
    hostName: "Yaw Fosu",
    courseName: "Data Structures",
    location: "Computer Lab A",
    reason:
      "Preparing for the upcoming quiz and practicing linked list and stack problems together.",
    sessionDate: "2025-12-23T16:00:00", // Today
    createdAt: "2025-12-23T09:15:00",
    attendees: [
      { id: 1, name: "Yaw Fosu" },
      { id: 2, name: "Kwame Mensah" },
    ],
  },
  {
    id: 2,
    hostName: "Ama Serwaa",
    courseName: "Database Systems",
    location: "Library Discussion Room 2",
    reason:
      "Group discussion on normalization, ER diagrams, and writing SQL queries together.",
    sessionDate: "2025-12-24T14:00:00", // Tomorrow
    createdAt: "2025-12-23T11:40:00",
    attendees: [{ id: 3, name: "Ama Serwaa" }],
  },
  {
    id: 3,
    hostName: "Kojo Antwi",
    courseName: "Web Development",
    location: "Engineering Block – Room B12",
    reason:
      "Collaborative practice on React components, props, and state management.",
    sessionDate: "2025-12-26T17:30:00", // In 3 days
    createdAt: "2025-12-22T18:45:00",
    attendees: [],
  },
  {
    id: 4,
    hostName: "Esi Owusu",
    courseName: "Operating Systems",
    location: "Hostel Study Area",
    reason:
      "Revision session on process scheduling, deadlocks, and memory management.",
    sessionDate: "2025-12-27T19:00:00", // In 4 days
    createdAt: "2025-12-23T08:10:00",
    attendees: [
      { id: 4, name: "Esi Owusu" },
      { id: 5, name: "Daniel Boateng" },
    ],
  },
];

export default mockSessions;
