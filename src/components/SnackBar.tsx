import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState, SyntheticEvent, MouseEvent, forwardRef } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Slide, { SlideProps } from "@mui/material/Slide";

type TransitionProps = Omit<SlideProps, "direction">;
type Variant = "success" | "warning" | "error" | "info";
type TransitionDirection = "left" | "right" | "up" | "down";
type VerticalPosition = "top" | "bottom";
type HorizontalPosition = "left" | "right" | "center";

export default function SnackBar({
  message,
  direction,
  severity,
  vposition,
  hposition,
}: {
  message: string;
  direction?: TransitionDirection;
  severity?: Variant;
  vposition?: VerticalPosition;
  hposition?: HorizontalPosition;
}) {
  type SnackProps = {
    open: boolean;
    vertical: "top" | "bottom";
    horizontal: "left" | "right" | "center";
  };

  function Transition(props: TransitionProps) {
    return <Slide {...props} direction={direction ? direction : "up"} />;
  }

  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [state, setState] = useState<SnackProps>({
    open: true,
    vertical: vposition ? vposition : "bottom",
    horizontal: hposition ? hposition : "left",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = (event: SyntheticEvent | MouseEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setState({ ...state, open: false });
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
        TransitionComponent={Transition}
      >
        <Alert
          onClose={handleClose}
          severity={severity ? severity : "success"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
