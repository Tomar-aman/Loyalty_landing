"use client";
import React, { CSSProperties } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack, Radio } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface CustomTabsProps {
  tabLabels: string[];
  tabContents: React.ReactNode[];
  radioButton?: boolean;
  styleRest?: CSSProperties;
  styleRestSelected?: CSSProperties;
  styleRestFlexContainer?: CSSProperties;
  restStyleDefault?: CSSProperties;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  tabLabels,
  tabContents,
  radioButton = false,
  styleRest,
  styleRestSelected,
  restStyleDefault,
  styleRestFlexContainer,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" sx={{ width: "100%", justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="custom tabs example"
          variant="fullWidth"
          TabIndicatorProps={{ sx: { backgroundColor: "transparent" } }}
          sx={{
            // width: "100%",
            borderRadius: "10px",
            background: "#7676801F",
            alignItems: "center",
            padding: "0px 4px",
            height: "30px",
            minHeight: "30px",
            ...restStyleDefault,
            "& .MuiTab-root": {
              minWidth: "178px",
              flex: 1,
              color: "#000000",
              height: "28px",
              minHeight: "28px",
              textTransform: "capitalize",
              fontSize: 14,
              fontWeight: 600,
              background: "transparent",
              width: "100%",
              border: "none",
              whiteSpace: "nowrap",
              boxShadow: "none",
              ...styleRest,
            },
            "& .Mui-selected": {
              fontWeight: 700,
              color: "#000000 !important",
              background: "#FFFFFF",
              boxShadow: "0px 3px 8px 0px #0000001F",
              borderRadius: "10px",
              ...styleRestSelected,
            },
            "& .MuiTabs-flexContainer": {
              ...styleRestFlexContainer,
              gap: 0.5,
            },
          }}
        >
          {tabLabels.map((label, index) => (
            <Tab
              key={index}
              {...a11yProps(index)}
              label={
                radioButton ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    {value === index && (
                      <Radio
                        checked
                        sx={{
                          padding: 0,
                          "& .MuiSvgIcon-root": { fontSize: 25, color: "#fff" },
                        }}
                      />
                    )}
                    {label}
                  </Box>
                ) : (
                  label
                )
              }
            />
          ))}
        </Tabs>
      </Stack>

      {tabContents.map((content, index) => (
        <TabPanel key={index} value={value} index={index}>
          {content}
        </TabPanel>
      ))}
    </Box>
  );
};

export default CustomTabs;
