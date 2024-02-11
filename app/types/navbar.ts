export type navbarItem = {
    id: number;
    name: string;
    value: string;
  };
  
  export type navbarSection = {
    title: string;
    items: navbarItem[];
  };