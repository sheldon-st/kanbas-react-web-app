export interface ILink {
  name: string;
  url: string;
}
export interface IProfileProps {
  name: string;
  pronouns: string;
  title: string;
  contact: string;
  bio: string;
  links: ILink[];
}

export const profile: IProfileProps = {
  name: "John Doe",
  pronouns: "he/him",
  title: "Software Engineer",
  contact: "",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris quis ipsum consequat sodales. Donec euismod, augue eget ultricies tincidunt, nisl ipsum aliquam lorem, non aliquam eros magna eu risus. Nulla facilisi. Aenean euismod, nisl eu ultricies pretium, nunc augue faucibus est, quis aliquet leo nisl sit amet velit. Sed euismod, nisl eu ultricies pretium, nunc augue faucibus est, quis aliquet leo nisl sit amet velit.",
  links: [
    {
      name: "YouTube",
      url: "https://youtu.be/xgY59LQfZSA",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/johndoe/",
    },
  ],
};
