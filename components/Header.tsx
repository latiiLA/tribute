"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export default function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Box sx={{ flexGrow: 1, paddingX: { xs: 1, sm: 2, md: 6 }, paddingY: 2 }}>
      <Toolbar>
        {isSmallScreen && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            "&::before": {
              content: {
                xs: '"Hachalu Hundessa"',
                sm: '"HH"',
                md: '"Hachalu Hundessa"',
              },
            },
          }}
        />
        {!isSmallScreen && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { sm: 1, md: 5 },
            }}
          >
            <Button sx={{ color: "inherit" }}>Home</Button>
            <Button sx={{ color: "inherit" }}>Biography</Button>
            <Button sx={{ color: "inherit" }}>Albums</Button>
            <Button sx={{ color: "inherit" }}>Fan Section</Button>
            <Button sx={{ color: "inherit" }}>Socials</Button>
          </Box>
        )}
      </Toolbar>
    </Box>
  );
}
