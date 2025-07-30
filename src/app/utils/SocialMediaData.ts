import { Github, Linkedin, Mail } from "lucide-react";
import { SocialMediaLink } from "../types/SocialMedia";

export const socialMedia: SocialMediaLink[] = [
  {
    id: 1,
    name: "github",
    url: "https://www.github.com/omarcamir",
    icon: Github,
  },
  {
    id: 2,
    name: "linkedin",
    url: "https://www.linkedin.com/in/omarcamir",
    icon: Linkedin,
  },
  {
    id: 3,
    name: "gmail",
    url: "omarcamirr@gmail.com",
    icon: Mail,
    isMail: true
  },
];
