import React from "react";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClickableBox from "../router";

interface ContentInfo {
  leftContent: any;
  backBtn?: boolean;
  backButton?: string;
  URL: string;
}

const TopContent = (props: ContentInfo) => {
  const { leftContent, backBtn, URL } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack style={{ width: "fit-content" }}>
        <ClickableBox
          nextPageUrl={URL}
          style={{ display: "flex", alignItems: "center" }}
        >
          {backBtn ? (
            <Box mr={{ lg: 2, xs: 1 }} sx={{ mt: 0.6 }}>
              <ArrowBackIcon style={{ color: "#000", fontSize: "40px" }} />
            </Box>
          ) : (
            <Box></Box>
          )}
          <Typography variant="h3">{leftContent}</Typography>
        </ClickableBox>
      </Stack>
    </Box>
  );
};

export default TopContent;
