import Image from "next/image";

export const ProjectImage = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width="250"
      height="150"
      className="group-hover:scale-105 transition"
    />
  );
};
