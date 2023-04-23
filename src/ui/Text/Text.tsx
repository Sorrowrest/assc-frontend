import React, { CSSProperties, HTMLAttributes } from "react";

import { Link as RRDLink, LinkProps as RRDLinkProps } from "react-router-dom";
import styles from "./Text.module.scss";
import cn from "classnames";

const styleSizes: Record<string, CSSProperties> = {
  "12": {
    fontSize: 12,
    lineHeight: "15.12px",
  },
  "14": {
    fontSize: 14,
    lineHeight: "23.23px",
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
    alternative?: boolean;
    font?: "Jost" | "Aqum";
  }
> & {
  Link: React.FC<LinkProps>;
};

export const Text: TextProps = ({
  className,
  color,
  style,
  alternative = false,
  size = 16,
  font,
  ...props
}) => {
  return (
    <p
      {...props}
      style={Object.assign({ ...style, color }, styleSizes[size])}
      className={cn(
        alternative && styles.wrapper,
        styles.defaultStyle,
        className,
        {
          [styles.jostFont]: font === "Jost",
        }
      )}
    ></p>
  );
};

type LinkProps = RRDLinkProps & {
  external?: boolean;
  size?: number;
  font?: "Jost" | "Aqum";
};

const Link: React.FC<LinkProps> = ({
  className,
  size = 16,
  style,
  external = false,
  font,
  color,
  ...props
}) => {
  if (external) {
    return (
      <a
        {...props}
        rel="noreferrer"
        target="_blank"
        style={Object.assign({ ...style, color }, styleSizes[size])}
        href={props.to as string}
        className={cn(styles.link, className, {
          [styles.jostFont]: font === "Jost",
        })}
      >
        {props.children}
      </a>
    );
  }
  return (
    <RRDLink
      {...props}
      style={Object.assign({ ...style, color }, styleSizes[size])}
      className={cn(styles.link, className, {
        [styles.jostFont]: font === "Jost",
      })}
    ></RRDLink>
  );
};

Text.Link = Link;
