import { Box, Container } from "@mui/material";
import { IcustomComponent } from "../interfaces/interface";
import Footer from "../footer/footer";
import Header from "../header/Header";

function Layout({ children }: IcustomComponent) {
  return (
    <>
      <Box>
        {/* <Header /> */}
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
