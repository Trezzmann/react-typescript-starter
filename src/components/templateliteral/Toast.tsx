type horizontalProps = "left" | "center" | "right";
type verticalProps = "top" | "center" | "bottom";

type toastProps = {
  position:
    | Exclude<`${horizontalProps}-${verticalProps}`, "center-center">
    | "center";
};

function Toast({ position }: toastProps) {
  return <div>Toast position: {position}</div>;
}

export default Toast;
