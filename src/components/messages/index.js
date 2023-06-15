import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Context from "../context/Context";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const messContext = React.useContext(Context);
  //   const [open, setOpen] = React.useState(false);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    messContext.setAppStore({
      open: false,
      messName: "error",
      messText: "",
    });
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={messContext.appStore.open}
        autoHideDuration={1200}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={messContext.appStore.messName}
          sx={{ width: "100%" }}
        >
          {messContext.appStore.messText}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
