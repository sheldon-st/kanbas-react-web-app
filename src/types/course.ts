
import { CSSProperties } from "react";

export interface ICourse {
  _id: string;
  name: string;
  number: string;
  startDate: Date;
  endDate: Date;
  semester: string;
  longName: string;
  description: string;
  image?: string;
  color: CSSProperties["color"];
}
