import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as LogoLayout } from "./logo-layout.svg";
import { ReactComponent as ItemVector } from "./item-vector.svg";

export const Icons: Record<
  string,
  React.FunctionComponent<React.SVGAttributes<SVGElement>>
> = {
  Logo,
  LogoLayout,
  ItemVector,
};
