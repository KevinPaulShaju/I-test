export const Schedule = [
  { id: 1, day: "Sunday" },
  {
    id: 2,
    day: "Monday",
    workTime: [
      { id: 1, from: "9 AM", to: "12 PM" },
      { id: 2, from: "2 PM", to: "6 PM" },
    ],
  },
  {
    id: 3,
    day: "Tuesday",
    workTime: [
      { id: 1, from: "9 AM", to: "12 PM" },
      { id: 2, from: "2 PM", to: "6 PM" },
    ],
  },
  {
    id: 4,
    day: "Wedenesday",
    workTime: [
      { id: 1, from: "9 AM", to: "12 PM" },
      { id: 2, from: "2 PM", to: "6 PM" },
    ],
  },
  {
    id: 5,
    day: "Thursday",
    workTime: [{ id: 1, from: "10 PM", to: "6 AM" }],
  },
  {
    id: 6,
    day: "Friday",
    workTime: [{ id: 1, from: "10 PM", to: "6 AM" }],
  },
  { id: 7, day: "Saturday" },
];

export const apps = [
  {
    blockedApps: [
      { id: 1, name: "Facebook" },
      { id: 2, name: "Instagaram" },
      { id: 3, name: "Twitter" },
      { id: 4, name: "Dailyhunt" },
    ],

    limitedApps: [
      {
        id: 5,
        name: "Facebook",
        limit: { weekdays: "00:30", weekends: "01:00" },
      },
      {
        id: 6,
        name: "Instagaram",
        limit: { weekdays: "01:00", weekends: "01:30" },
      },
      {
        id: 7,
        name: "Youtube",
        limit: { weekdays: "01:30", weekends: "02:00" },
      },
    ],

    allApps: [
      { id: 8, name: "PubG" },
      { id: 9, name: "Clash Of Clans" },
      { id: 10, name: "PhonePe" },
    ],
  },
];

export const blockedApps = [
  { id: 1, name: "Facebook" },
  { id: 2, name: "Instagaram" },
  { id: 3, name: "Twitter" },
  { id: 4, name: "Dailyhunt" },
];

export const limitedApps = [
  { id: 5, name: "Facebook", limit: { weekdays: "30m", weekends: "1h" } },
  {
    id: 6,
    name: "Instagaram",
    limit: { weekdays: "1h", weekends: "1.30h" },
  },
  {
    id: 7,
    name: "Youtube",
    limit: { weekdays: "1.30h", weekends: "2h" },
  },
];

export const allApps = [
  { id: 8, name: "PubG" },
  { id: 9, name: "Clash Of Clans" },
  { id: 10, name: "PhonePe" },
];
