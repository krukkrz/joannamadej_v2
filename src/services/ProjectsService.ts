export const getProjects = (): Project[] => {
  return [
    {
      title: "Guild",
      description:
        "The guild app is a social app created to make networking easier. While working at Monterail Software House, I had the opportunity to design new features for the Guild app and redesign old ones.",
      image: 0,
      url: "/",
    },
    {
      title: "Omantel online store",
      description:
        "Omantel is the largest telecommunications company in Oman. In addition to telecommunications services, they also have an online store with electronics. While working at the Unriddl agency, I had the opportunity to work on the Omantel store project and design new features for it.",
      image: 0,
      url: "/",
    },
    {
      title: "Deskly",
      description:
        "UX case study, created to showcase my design process and UX skills. As part of the project, I conducted a UX audit and in-depth interviews with users, and I designed screens for Deskly - a desk booking application.",
      image: 0,
      url: "/",
    },
    {
      title: "HealthyMe",
      description:
        "HealthyMe is an app that aims to support users in implementing healthy habits into their daily routines. I created an interface design for it based on the provided lo-fi mockups. Designs were made for the Dare IT UI Challenge competition in which I recived an honorable mention.",
      image: 0,
      url: "/",
    },
  ];
};

export type Project = {
  title: string;
  description: string;
  image: number;
  url: string;
};
