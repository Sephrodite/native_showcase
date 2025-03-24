export type Event = {
    id: string;
    title: string;
    speaker: string;
    time: string;
    location: string;
    description: string;
    type: string;
    duration: string;
  };
  
  export const events: Event[] = [
    {
      id: "1",
      title: "Opening Ceremony",
      speaker: "Anna Virtanen",
      time: "09:00 AM",
      location: "Main Hall",
      description: "Kick-off ceremony introducing key themes and special guests.",
      type: "Ceremony",
      duration: "1 hour",
    },
    {
      id: "2",
      title: "React Native 101",
      speaker: "Mikael Korhonen",
      time: "10:30 AM",
      location: "Room 2A",
      description: "A beginner-friendly workshop to start building apps in React Native.",
      type: "Workshop",
      duration: "90 minutes",
    },
    {
      id: "3",
      title: "Networking Session",
      speaker: "Various",
      time: "12:00 PM",
      location: "Lounge",
      description: "Meet and connect with fellow innovators and entrepreneurs.",
      type: "Networking",
      duration: "2 hours",
    },
    {
      id: "4",
      title: "Interactive Storytelling",
      speaker: "LARP Finland",
      time: "2:00 PM",
      location: "Main Hall",
      description: "Explore storytelling through live-action role-play techniques.",
      type: "Interactive",
      duration: "2 hours",
    },
    {
      id: "5",
      title: "Future of Tech Panel",
      speaker: "Panelists from various tech startups",
      time: "4:00 PM",
      location: "Auditorium",
      description: "Discussion on the trends and the future directions in tech.",
      type: "Panel",
      duration: "1 hour",
    },
    {
      id: "6",
      title: "Closing Party",
      speaker: "DJ Helsinki",
      time: "7:00 PM",
      location: "Party Hall",
      description: "Celebrate the event with music, food, and drinks.",
      type: "Party",
      duration: "4 hours",
    },
  ];