"use client";
import { Box, BoxProps } from "@mui/material";
import { useRouter } from "next/navigation";

interface ClickableBoxProps extends BoxProps {
  nextPageUrl?: string;
  children?: React.ReactNode;
}

const ClickableBox = ({
  nextPageUrl,
  children,
  ...props
}: ClickableBoxProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (nextPageUrl) {
      router.push(nextPageUrl);
    }
  };

  return (
    <Box {...props} sx={{ cursor: "pointer" }} onClick={handleClick}>
      {children}
    </Box>
  );
};

export default ClickableBox;
