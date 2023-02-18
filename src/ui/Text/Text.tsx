import React, { CSSProperties, HTMLAttributes } from "react";

import { Link as RRDLink, LinkProps as RRDLinkProps } from "react-router-dom";
import styles from "./Text.module.scss";
import cn from "classnames";

const styleSizes: Record<string, CSSProperties> = {
  "12": {
    fontSize: 12,
    lineHeight: "15.12px",
  },
  "16": {
    fontSize: 16,
    lineHeight: "20.16px",
  },
  "20": {
    fontSize: 20,
    lineHeight: "25.2px",
  },
  "28": {
    fontSize: 28,
    lineHeight: "35px",
  },
};

type TextProps = React.FC<
  HTMLAttributes<HTMLParagraphElement> & {
    size?: number;
  }
> & {
  Link: React.FC<LinkProps>;
};

export const Text: TextProps = ({ className, style, size = 16, ...props }) => {
  return (
    <p
      {...props}
      style={Object.assign({ ...style }, styleSizes[size])}
      className={cn(styles.wrapper, className)}
    ></p>
  );
};

type LinkProps = RRDLinkProps & {
  external?: boolean;
  size?: number;
};

const Link: React.FC<LinkProps> = ({
  className,
  size = 16,
  style,
  external = false,
  ...props
}) => {
  if (external) {
    return (
      <a
        {...props}
        style={Object.assign({ ...style }, styleSizes[size])}
        href={props.to as string}
        className={cn(styles.link, className)}
      ></a>
    );
  }
  return (
    <RRDLink
      {...props}
      style={Object.assign({ ...style }, styleSizes[size])}
      className={cn(styles.link, className)}
    ></RRDLink>
  );
};

Text.Link = Link;
