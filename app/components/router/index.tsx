// "use client";
// import { Box, BoxProps } from "@mui/material";
// import { useRouter } from "next/navigation";

// interface ClickableBoxProps extends BoxProps {
//   nextPageUrl?: string;
//   children?: React.ReactNode;
// }

// const ClickableBox = ({
//   nextPageUrl,
//   children,
//   ...props
// }: ClickableBoxProps) => {
//   const router = useRouter();

//   const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     if (nextPageUrl) {
//       router.push(nextPageUrl);
//     }
//   };

//   return (
//     <Box {...props} sx={{ cursor: "pointer" }} onClick={handleClick}>
//       {children}
//     </Box>
//   );
// };

// export default ClickableBox;

"use client";

import Link from "next/link";
import { Box, BoxProps } from "@mui/material";
import React from "react";

interface ClickableBoxProps extends BoxProps {
  nextPageUrl?: string;
  target?: "_self" | "_blank";
  children: React.ReactNode;
}

const ClickableBox = ({
  nextPageUrl,
  target = "_self",
  children,
  ...props
}: ClickableBoxProps) => {
  if (!nextPageUrl) {
    return <Box {...props}>{children}</Box>;
  }

  return (
    <Link
      href={nextPageUrl}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      style={{ textDecoration: "none" }}
    >
      <Box
        {...props}
        sx={{
          cursor: "pointer",
          ...(props.sx || {}),
        }}
        component="span"
      >
        {children}
      </Box>
    </Link>
  );
};

export default ClickableBox;
