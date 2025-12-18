// components/BasicMenu.tsx
import * as React from "react";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import CostumeButton from "../button";

interface BasicMenuProps {
  buttonText?: string | React.ReactNode;
  children?: React.ReactNode;
  rest?: React.HTMLAttributes<HTMLDivElement>;
}

const BasicMenu: React.FC<BasicMenuProps> = ({
  buttonText,
  children,
  ...rest
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div {...rest} style={{ position: "relative" }}>
      <CostumeButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="inheritCssComonBtn"
      >
        {buttonText}
      </CostumeButton>

      {open && (
        <Box
          onClick={handleClose}
        />
      )}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            zIndex: 2,
            width: "204px",
            height: "auto",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 1px 3px 0px #1018281A",
            borderRadius: "12px",
            border: "1px solid #DBDBDB",
            color: "#0F172A",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "0",
            minHeight: "100px",
            px: 2,
            py: 1,
            textTransform: "capitalize",
          },
        }}
      >
        {children}
      </Menu>
    </div>
  );
};

export default BasicMenu;
