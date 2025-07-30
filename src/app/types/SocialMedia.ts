import { LucideIcon } from "lucide-react";

export type SocialMediaLink = {
  id: number;
  name: string;
  url: string;
  icon: LucideIcon;
  isMail?: boolean;
};
