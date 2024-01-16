import React from "react";
import {Box, Typography} from "@mui/material";

interface ProtectedPageLayoutProps extends React.PropsWithChildren {
  title: string;
  onTitleClick?: () => void;
  subtitle?: string;
}

// TODO: add protection logic
const ProtectedPageLayout: React.FC<ProtectedPageLayoutProps> = ({children, title, subtitle, onTitleClick}) => {
  return <Box sx={{ height: '100vh'}}>
    <Typography component={'span'} variant={"h4"} onClick={() => {
      if (onTitleClick) onTitleClick()
    }} sx={{ cursor: !!onTitleClick ? 'pointer' : 'default' }}>{title}</Typography>
    {subtitle && <Typography component={'span'} variant={"h6"}> {" > " + subtitle}</Typography>}
    {children}
  </Box>
}

export default ProtectedPageLayout;