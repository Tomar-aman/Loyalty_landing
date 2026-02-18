import { Typography, Box } from "@mui/material";
import CustomAccordion from "../components/accordion/accordion";

const privacyPolicyData = [
  {
    title: "🔐 Privacy Policy",
    description:
      "Effective Date: 16 February 2026\n\nThis Privacy Policy describes how Loyalty Card App (“we,” “our,” or “us”) collects, uses, and protects your information when you use our mobile application.\n\nBy using the Loyalty Card App, you agree to the collection and use of information in accordance with this policy.",
  },
  {
    title: "1. Information We Collect",
    description:
      "A. Personal Information\n\nWhen you register or use the app, we may collect:\n• Full Name\n• Email Address\n• Phone Number\n• Selected City\n• Account login details\n\nB. Location Information\n\nWe may collect approximate location information to:\n• Show nearby businesses\n• Display relevant local offers\n• Improve location-based services\n\nYou can disable location access in your device settings at any time.\n\nC. Subscription & Purchase Information\n\nOur app offers subscription plans such as:\n• 1 Week Plan\n• 1 Month Plan\n• 1 Year Plan\n\nAll payments are processed securely through Apple In-App Purchases.\nWe do not store or have access to your credit/debit card details.\n\nWe may store:\n• Subscription status\n• Transaction ID\n• Plan type\n• Expiry date\n\nD. Usage Data\n\nWe may automatically collect:\n• Device type\n• Operating system version\n• App usage activity\n• Crash logs\n• IP address\n\nThis helps us improve app performance and user experience.\n\nE. Push Notifications\n\nIf you enable notifications, we may collect device tokens to send:\n• Offers\n• Business updates\n• Important announcements\n\nYou can disable notifications in your device settings at any time.",
  },
  {
    title: "2. How We Use Your Information",
    description:
      "We use collected data to:\n• Provide loyalty benefits and discounts\n• Process subscriptions\n• Display nearby businesses\n• Improve app functionality\n• Provide customer support\n• Send relevant updates and notifications\n• Prevent fraud and misuse",
  },
  {
    title: "3. Sharing of Information",
    description:
      "We do not sell your personal data.\n\nWe may share information with:\n• Hosting and cloud service providers\n• Analytics providers\n• Apple for payment processing\n• Legal authorities if required by law\n\nBusinesses listed in the app do not receive your personal information unless you directly contact them.",
  },
  {
    title: "4. Data Retention",
    description:
      "We retain your data while your account remains active.\n\nYou may request deletion of your account and data at any time by contacting us.",
  },
  {
    title: "5. Data Security",
    description:
      "We use industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    title: "6. Your Rights",
    description:
      "You have the right to:\n• Access your personal data\n• Correct inaccurate data\n• Request deletion of your data\n• Withdraw consent\n\nTo exercise these rights, contact us at:\n📧 app@stadtcard.com",
  },
  {
    title: "7. Children’s Privacy",
    description:
      "The Loyalty Card App is not intended for children under 13 years of age.\nWe do not knowingly collect personal information from children.",
  },
  {
    title: "8. Third-Party Links",
    description:
      "Our app may contain links to third-party services (such as business websites, maps, or calling features).\nWe are not responsible for their privacy practices.",
  },
  {
    title: "9. Changes to This Privacy Policy",
    description:
      "We may update this Privacy Policy from time to time.\nChanges will be posted within the app and on our website.",
  },
  {
    title: "10. Contact Us",
    description:
      "If you have any questions about this Privacy Policy, please contact:\n\nLoyalty Card App Support\nEmail: app@stadtcard.com",
  },
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
          <Typography variant="h6" sx={{ color: "#6F6C90", fontSize: "18px" }}>
            {item.description}
          </Typography>
        </CustomAccordion>
      ))}
    </Box>
  );
};

export default PrivacyPolicy;
