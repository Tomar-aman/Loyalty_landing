/* =======================
   API STATUS & RESPONSES
======================= */

export enum RemoteStatus {
  Idle = "IDLE",
  Loading = "LOADING",
  Success = "SUCCESS",
  Failure = "FAILURE",
}

export interface SuccessResponse<T> {
  remote: RemoteStatus.Success;
  data: T;
}

export interface ErrorResponse {
  remote: RemoteStatus.Failure;
  error: {
    errorMessage?: any;
    status?: number;
    errors?: any;
  };
}

/* =======================
   LANDING PAGE
======================= */

export interface LandingPageContent {
  id: number;
  created_at: string;
  updated_at: string;

  banner_title: string;
  banner_description: string;
  banner_image: string | null;

  business_section_title: string;
  business_section_description: string;

  card_section_title: string;
  card_section_description: string;
  card_section_image: string | null;

  news_section_title: string;
  news_section_description: string;

  touch_section_title: string | null;
  touch_section_description: string | null;

  faq_section_title: string | null;
  faq_section_description: string | null;

  footer_section_title: string | null;
  footer_section_description: string | null;
}

/* =======================
   FAQ
======================= */

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

/* =======================
   NEWS
======================= */

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  published_at: string;
  read_time?: string;
  image?: string | null;
}

/* =======================
   CARDS
======================= */

export interface CardPlan {
  id: number;
  title: string;
  duration: string;
  price: string;
  features: string[];
  is_popular?: boolean;
}

/* =======================
   CONTACT / FORMS
======================= */

export interface ContactUsPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SupportPayload {
  name: string;
  email: string;
  issue: string;
}

export interface SubscribePayload {
  email: string;
}


/* ---------- BUSINESS ---------- */
export interface BusinessItem {
  id: number;
  name: string;
  category?: {
    name: string;
  } | null;
  discount_text?: string | null;
  address?: string | null;
  phone?: string | null;
  opening_time?: string | null;
  closing_time?: string | null;
  latitude?: number | null;
  longitude?: number | null;
}

/* ---------- NEWS ---------- */
export interface NewsItem {
  id: number;
  title: string;
  description: string;
  published_at: string;
  read_time?: string;
}

/* ---------- CARD ---------- */
export interface CardPlan {
  id: number;
  title: string;
  duration: string;
  price: string;
  features: string[];
  is_popular?: boolean;
}