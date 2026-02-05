"use client";
import { Grid, Box, Typography, Stack } from "@mui/material";
import SVGICON from "@/app/assets/svg/icon";
import CostumeButton from "../button";
import Image from "next/image";
import IMAGES from "@/app/assets/images";
import { CardPlan } from "@/services/types.";

/* ---------- PROPS ---------- */
interface AdvantageCardProps {
  title?: string;
  description?: string;
  image?: string | null;
  cards?: CardPlan[];
}

export default function AdvantageCard({
  title,
  description,
  image,
  cards = [],
}: AdvantageCardProps) {
  return (
    <Box>
      <Grid container spacing={4}>
        {/* ---------- LEFT SECTION ---------- */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h2">
            {title ?? (
              <>
                <span
                  style={{
                    background: "none",
                    WebkitBackgroundClip: "unset",
                    WebkitTextFillColor: "#020817",
                    paddingRight: "10px",
                  }}
                >
                  Unlock Exclusive
                </span>
                <br />
                Advantage Cards
              </>
            )}
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "#64748B", my: 3, fontSize: "20px" }}
          >
            {description ??
              "Get instant access to exclusive discounts and deals from local businesses. Choose the plan that fits your lifestyle and start saving today."}
          </Typography>

          {/* IMAGE */}
          <Box my={3}>
            <Image
              src={image || IMAGES.ActivatcardNew}
              alt="Advantage Card"
              width={600}
              height={400}
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </Box>

          {/* FEATURES */}
          {/* <Grid container spacing={2}>
            <FeatureCard
              icon={<SVGICON.Check />}
              title="Instant Activation"
              description="Start using immediately"
              bg="#16A2491A"
              border="#16A24933"
            />
            <FeatureCard
              icon={<SVGICON.Timer />}
              title="Flexible Validity"
              description="Choose plans that suit you"
              bg="#E3E4FE"
              border="#0000FF33"
            />
          </Grid> */}
        </Grid>

        {/* ---------- RIGHT SECTION (DYNAMIC PLANS) ---------- */}
        <Grid size={{ xs: 12, md: 6 }}>
          {cards.length > 0 ? (
            cards.map((card, index) => (
              <PlanCard
                key={card.id}
                icon={<SVGICON.Celerate />}
                title={card.name}
                duration={formatDuration(card.duration)}
                price={`$${card.price}`}
                features={card.benefits?.map(b => b.title) ?? []}
                popular={card.is_popular || index === 1}
                buttonText={`Activate ${card.name}`}
                variant={card.is_popular ? "primaryBtn" : "outlineBtn"}
              />
            ))
          ) : (
            <Typography color="text.secondary">
              No plans available
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

/* ---------- HELPERS ---------- */

const formatDuration = (value: string) => {
  switch (value) {
    case "1_day":
      return "24 hours";
    case "1_week":
      return "7 days";
    case "1_month":
      return "30 days";
    case "1_year":
      return "1 year";
    default:
      return value;
  }
};

/* ---------- REUSABLE COMPONENTS ---------- */

const FeatureCard = ({
  icon,
  title,
  description,
  bg,
  border,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bg: string;
  border: string;
}) => (
  <Grid size={{ xs: 12, md: 6 }}>
    <Box className="customCardShadow" sx={{ background: bg, border }}>
      <Stack direction="row" spacing={1}>
        {icon}
        <Box>
          <Typography fontWeight={600}>{title}</Typography>
          <Typography sx={{ fontSize: 14, color: "gray" }}>
            {description}
          </Typography>
        </Box>
      </Stack>
    </Box>
  </Grid>
);

const PlanCard = ({
  icon,
  title,
  duration,
  price,
  features,
  buttonText,
  variant,
  popular,
}: {
  icon: React.ReactNode;
  title: string;
  duration: string;
  price: string;
  features: string[];
  buttonText: string;
  variant: string;
  popular?: boolean;
}) => (
  <Box
    className="customCardShadow"
    sx={{
      mb: 3,
      position: "relative",
      border: popular ? "2px solid #0000FF" : undefined,
    }}
  >
    {popular && (
      <Box
        sx={{
          background:
            "linear-gradient(102.45deg, #0000FF 0%, #BB33FF 100%)",
          color: "#FFFFFF",
          padding: "4px 16px",
          position: "absolute",
          right: 0,
          top: 0,
          borderRadius: "0px 10px 0px 10px",
        }}
      >
        Most Popular
      </Box>
    )}

    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
      <Stack direction="row" spacing={2}>
        {icon}
        <Box>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h6" color="#64748B">
            {duration}
          </Typography>
        </Box>
      </Stack>

      <Box textAlign="end">
        <Typography variant="h5">{price}</Typography>
        <Typography variant="h6" color="#64748B">
          one-time
        </Typography>
      </Box>
    </Box>

    <Box my={2}>
      {features.map((text, index) => (
        <Box
          key={index}
          sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
        >
          <SVGICON.Check />
          <Typography variant="h6" color="#64748B">{text}</Typography>
        </Box>
      ))}
    </Box>

    <CostumeButton className={variant}>{buttonText}</CostumeButton>
  </Box>
);
