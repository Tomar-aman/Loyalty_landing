// breadcrumbs component index.tsx
import { Box } from "@mui/material";
import styles from "./style.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ClickableBox from "../../router";
 
interface BreadcrumbItem {
  nextPageUrl: string;
  icon?: React.ReactNode;
  label: string;
}
 
interface BasicBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function BasicBreadcrumbs({ items }: BasicBreadcrumbsProps) {
  return (
    <div role="presentation">
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<ChevronRightIcon className={styles.breadcrumbSeparator} />}
      >
        {items.map((item, index) => (
          <Box key={index}>
            <ClickableBox
              nextPageUrl={item.nextPageUrl}
              className={styles.clickableBox}
            >
              <div className={styles.breadcrumbIcon}>
                {item.icon ? item.icon : null}
              </div>
              {item.label}
            </ClickableBox>
          </Box>
        ))}
      </Breadcrumbs>
    </div>
  );
}
