import Register from "./Register";
import { profileProps } from "./Profile";

type privateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<profileProps>;
};

function Private({ isLoggedIn, component: Component }: privateProps) {
  if (isLoggedIn) return <Component name="Armand" />;
  return <Register />;
}

export default Private;
