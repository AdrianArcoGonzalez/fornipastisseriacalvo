import Link from "next/link";
import styles from "./ButtonLink.module.css";

interface ButtonLinkProps {
  baseColor: "primary" | "secondary";
  href: string;
  text: string;
}

const ButtonLink = ({ baseColor, href, text }: ButtonLinkProps) => {
  return (
    <Link className={`${styles.button} ${styles[baseColor]}`} href={href}>
      {text}
    </Link>
  );
};

export default ButtonLink;
