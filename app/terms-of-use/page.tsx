import { Typography, Box } from "@mui/material";
import CustomAccordion from "../components/accordion/accordion";

const termsOfUseData = [
  {
    title: "1. Acceptance of Terms",
    description:
      "By accessing or using our platform, you agree to comply with and be bound by these Terms of Use.",
  },
  {
    title: "2. Eligibility",
    description:
      "You must be legally eligible to use our services and provide accurate, complete information during registration.",
  },
  {
    title: "3. Account Responsibilities",
    description:
      "You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.",
  },
  {
    title: "4. Prohibited Activities",
    description:
      "Users may not misuse the platform, attempt unauthorized access, or engage in illegal or harmful activities.",
  },
  {
    title: "5. Subscription & Payments",
    description:
      "Some features may require payment. All charges are billed according to the selected plan and are non-refundable unless stated otherwise.",
  },
  {
    title: "6. Intellectual Property",
    description:
      "All content, trademarks, and intellectual property on the platform belong to the company and may not be used without permission.",
  },
  {
    title: "7. Service Availability",
    description:
      "We strive to maintain uninterrupted service but do not guarantee continuous availability or error-free operation.",
  },
  {
    title: "8. Limitation of Liability",
    description:
      "We are not liable for indirect, incidental, or consequential damages resulting from the use of our platform.",
  },
  {
    title: "9. Account Termination",
    description:
      "We reserve the right to suspend or terminate accounts that violate these terms or misuse the platform.",
  },
  {
    title: "10. Governing Law",
    description:
      "These Terms of Use are governed by applicable laws, and any disputes will be resolved under the appropriate jurisdiction.",
  },
];

const TermsOfUse = () => {
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", my: 6 }}>
      <Typography variant="h1" mb={4}>
        Terms of Use
      </Typography>

      {termsOfUseData.map((item, index) => (
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

export default TermsOfUse;
