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

