import { Paper } from "@mui/material";

function WidgetBoard() {
  return (
    <Paper
      sx={{
        bgcolor: "white",
        height: 200,
        width: { xs: "100%", sm: "100%", md: "30%" },
        ml: 4,
        mt: 4,
      }}
      elevation={8}
      square={false}
    />
  );
}

export default WidgetBoard;
