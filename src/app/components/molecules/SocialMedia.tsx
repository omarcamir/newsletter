import { socialMedia } from "@/app/utils/SocialMediaData";

const SocialMedia = () => {
  return (
    <div className="flex gap-4">
      {socialMedia.map((acc) => (
        <a
          key={acc.id}
          href={acc.isMail ? `mailto:${acc.url}` : acc.url}
          target={acc.isMail ? "_self" : "_blank"}
          rel={ acc.isMail ? "" : "noopener"}
        >
          <acc.icon className="w-4 h-4 text-white hover:text-gray-400 duration-200 transition-colors" />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
