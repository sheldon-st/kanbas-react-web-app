import { type } from "os";
import { CSSProperties } from "react";
export interface IAssignment {
  id: string;
  name: string;

  description: string;
  dueDate: Date;
  grade: number;
}

export interface IModuleBasicItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  type: "basic" | "link";
}

export interface IModuleLinkItem extends IModuleBasicItem {
  url: string;
  type: "link";
}

export type IModuleItem = IModuleLinkItem | IModuleBasicItem;

export interface IModuleSection {
  id: string;
  name: string;
  items: IModuleItem[];
}

export interface IModule {
  id: string;
  name: string;
  sections: IModuleSection[];
}

export interface IStudent {
  id: string;
  name: string;
  email: string;
  image: string;
}

export interface ICourse {
  id: string;
  name: string;
  section: string;
  semester: string;
  longName: string;
  description: string;
  assignments: IAssignment[];
  modules: IModule[];
  image?: string;
  color: CSSProperties["color"];
  students: IStudent[];
}
