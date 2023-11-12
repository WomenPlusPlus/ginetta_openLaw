import Link from "next/link";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link href={"/"}>
        <Image src="/logo.png" alt="logo" width={30} height={30} />
      </Link>{" "}
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontweight: "800",
          textShadow: "2px 2px 20px #000",
        }}
      >
        <span style={{ fontSize: "20px", color: "black" }}>Open</span>Law
      </Typography>
    </div>
  );
};

export default Logo;
