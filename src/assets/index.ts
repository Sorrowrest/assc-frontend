import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as LogoLayout } from "./logo-layout.svg";

export const Icons: Record<
  string,
  React.FunctionComponent<React.SVGAttributes<SVGElement>>
> = {
  Logo: Logo,
  LogoLayout: LogoLayout,
};
