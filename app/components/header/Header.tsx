import SVG from "@/app/assets/svg";
import CostumeButton from "../button";
import { Box, Stack, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ background: "#0C1518", p: 2, borderRadius: "20px", mt: 1 }}>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {/* <SVG.Headerlogo /> */}
        <Typography variant="h3">MikeVehicles</Typography>
        <CostumeButton className="customBtn">+1 222-222-222</CostumeButton>
      </Stack>
    </Box>
  );
}
