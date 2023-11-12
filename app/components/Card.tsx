import { Paper } from "@mui/material";

interface cardProps {
  height: string;
  width: string;
  children?: React.ReactNode;
}

function Card({ height, width, children }: cardProps) {
  return (
    <>
      <Paper
        sx={{
          bgcolor: "#D4D4D4",
          height: { height },
          width: { width },
          borderRadius: "15px",
          transition: "all 0.5s ease",
          padding: "20px",
          paddingBottom: "20px",
          // Adding margin top if needed to account for the header
        }}
        elevation={8}
      >
        {children}
      </Paper>
    </>
  );
}

export default Card;
