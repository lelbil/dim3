import React from "react";
import {Grid, Typography, Skeleton, Box} from "@mui/material";

interface InfoFieldProps {
  label: string;
  children: string | number | null | undefined;
  loading: boolean;
}

const InfoField = ({
  label,
  loading,
  children,
}: InfoFieldProps) => (
  <Grid item direction="column" xs={12} md={6} sx={{ minHeight: "48px" }}>
    <Typography variant="overline" ml={3}>{label}</Typography>
    {loading || !children ? (
      <Skeleton variant="text" width={90} />
    ) : (
      <Box sx={{ border: '1px solid #CCC', borderRadius: 2, bgcolor: '#EEE', mx: 3 }}>
        <Typography variant="body2" component="div" sx={{ pl: 2, py: 1 }}>
          {children}
        </Typography>
      </Box>
    )}
  </Grid>
);

export default InfoField;
