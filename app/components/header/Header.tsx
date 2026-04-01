import SVG from "@/app/assets/svg";
import CostumeButton from "../button";
import { Box, Stack, Typography } from "@mui/material";
import ClickableBox from "../router";

export default function Header() {
  return (
    <Box sx={{ background: "#F3F3F5", px: 12, py: 2 }}>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {/* <SVG.Headerlogo /> */}
        <ClickableBox nextPageUrl="/">
          <CostumeButton className="primaryBtn">Start</CostumeButton>
        </ClickableBox>
        <Stack direction="row" spacing={2}>
          <ClickableBox nextPageUrl="/explore-businesses">
            <CostumeButton className="outlineBtn">Company</CostumeButton>
          </ClickableBox>
        </Stack>
      </Stack>
    </Box>
  );
}
