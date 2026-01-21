import { Typography, Box } from "@mui/material";
import CustomAccordion from "../components/accordion/accordion";
const privacyPolicyData = [
  {
    title: "1. Introduction",
    description:
      "This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform and services.",
  },
  {
    title: "2. Information We Collect",
    description:
      "We collect personal details such as name, email, phone number, as well as type and usage activity.",
  },
  // {
  //   title: "3. How We Use Your Information",
  //   description:
  //     "Your information is used to provide services, process transactions, improve user experience, communicate updates, and maintain security.",
  // },
  // {
  //   title: "4. Cookies & Tracking Technologies",
  //   description:
  //     "We use cookies and similar technologies to enhance functionality, analyze traffic, and personalize content.",
  // },
  // {
  //   title: "5. Data Sharing",
  //   description:
  //     "We do not sell your personal data. Information may be shared with trusted partners or service providers strictly for operational purposes.",
  // },
  // {
  //   title: "6. Data Security",
  //   description:
  //     "We implement industry-standard security measures to protect your data from unauthorized access, misuse, or disclosure.",
  // },
  // {
  //   title: "7. Data Retention",
  //   description:
  //     "We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.",
  // },
  // {
  //   title: "8. User Rights",
  //   description:
  //     "You have the right to access, update, correct, or delete your personal data and to opt out of marketing communications.",
  // },
  // {
  //   title: "9. Third-Party Links",
  //   description:
  //     "Our platform may contain links to third-party websites. We are not responsible for their privacy practices or content.",
  // },
  // {
  //   title: "10. Policy Updates",
  //   description:
  //     "We may update this Privacy Policy from time to time. Continued use of our services indicates acceptance of the revised policy.",
  // },
];

const PrivacyPolicy = () => {
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", my: 6 }}>
      <Typography variant="h1" mb={4}>
        Privacy Policy
      </Typography>

      {privacyPolicyData.map((item, index) => (
        <CustomAccordion
          key={index}
          defaultExpanded={index === 0}
          title={item.title}
          restStyle={{ borderBottom: "1px solid #E3E3E3" }}
        >
          <Typography variant="h6" sx={{ color: "#6F6C90",fontSize:"18px" }}>
            {item.description}
          </Typography>
        </CustomAccordion>
      ))}
    </Box>
  );
};

export default PrivacyPolicy;
