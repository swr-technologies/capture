export type navbarItem = {
  id: number;
  name: string;
  path: string;
  icon?: any;
};

export type navbarSection = {
  title: string;
  items: navbarItem[];
};
