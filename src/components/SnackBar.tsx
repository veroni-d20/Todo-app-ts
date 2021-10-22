import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState, SyntheticEvent, MouseEvent, forwardRef } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Slide, { SlideProps } from "@mui/material/Slide";

type TransitionProps = Omit<SlideProps, "direction">;
type Variant = "success" | "warning" | "error" | "info";
type Direction = "left" | "right" | "up" | "down" | undefined;

export default function SnackBar({
  user,
  direction,
  severity,
}: {
  user?: string;
  direction?: Direction;
  severity: Variant;
}) {
  function TransitionUp(props: TransitionProps) {
    return <Slide {...props} direction={direction} />;
  }

  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(true);

  const handleClose = (event: SyntheticEvent | MouseEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Welcome"
        action={action}
        TransitionComponent={TransitionUp}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          Welcome {user} 🎉
        </Alert>
      </Snackbar>
    </div>
  );
}
