import React, { ReactElement } from "react";
import Modal, { ModalProps } from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import CostumeButton from "../button";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  borderRadius: "12px",
  padding: "20px",
  outline: "none",
  "@media (max-width: 600px)": {
    width: "100%",
    padding: "6px",
  },
};

interface IModel extends Omit<ModalProps, "slotProps"> {
  children: ReactElement<any, string | React.JSXElementConstructor<any>>;
  title?: string;
  onClose?: () => void;
  modalCloseIcon?: any;
}

function ModalComponent({
  children,
  title, 
  onClose,
  modalCloseIcon,
  ...rest
}: IModel) {
  return (
    <Box>
      <Modal {...rest} onClose={onClose}>
        <Box sx={style} onClick={(e) => e.stopPropagation()}>
          {title && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="h5" sx={{ fontSize: "20px" }}>
                {title}
              </Typography>
              {onClose && (
                <Box onClick={onClose}>
                  {modalCloseIcon && (
                    <CostumeButton
                      className="inheritCssComonBtn"
                      stylesRest={{
                        background: "#F8FAFC !important",
                        width: "40px !important",
                        height: "40px!important",
                        color: "#64748B!important",
                      }}
                    >
                      <CloseIcon />
                    </CostumeButton>
                  )}
                </Box>
              )}
            </Box>
          )}
          {children}
        </Box>
      </Modal>
    </Box>
  );
}

export default ModalComponent;
