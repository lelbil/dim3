import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ProtectedPageLayoutProps extends React.PropsWithChildren {
  title: string;
  onTitleClick?: () => void;
  subtitle?: string;
}

const ProtectedPageLayout: React.FC<ProtectedPageLayoutProps> = ({
  children,
  title,
  subtitle,
  onTitleClick,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Box sx={{ height: "100vh" }}>
      <Grid container pt={4} ml={4} alignItems={"center"}>
        <Typography
          variant={"h4"}
          component={"span"}
          onClick={() => {
            if (onTitleClick) onTitleClick();
          }}
          sx={{ cursor: !!onTitleClick ? "pointer" : "default" }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography component={"span"} variant={"h6"} ml={2}>
            {" "}
            {" > " + subtitle}
          </Typography>
        )}
      </Grid>
      {children}
    </Box>
  );
};

export default ProtectedPageLayout;
