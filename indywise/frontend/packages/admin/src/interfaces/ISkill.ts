export interface ISkill {
  name: string;
  category?: string;
  ID?: string;
  isActive?: boolean;
}

export interface ICreateSkill {
  name: string;
  category: string;
}
