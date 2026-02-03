export enum RemoteStatus {
  Success = "success",
  Failure = "failure",
}

export interface SuccessResponse<T> {
  remote: RemoteStatus.Success;
  data: any;
}

export interface ErrorResponse {
  remote: RemoteStatus.Failure;
  error: any;
}

export interface Document {
  id?: string;
  lender_id: string;
  business_id?: string;
  folder_type: string;
  title: string;
  percentage_of_ownership: string;
}

export interface LenderDocuments {
  personal: Document[];
  business: Document[];
}

export interface LenderDetails {
  currentUser: {
    id: number;
    lender_id: number;
    name: string;
    email: string;
    phone_code: string;
    phone: string;
    loan_type: string | null;
    branch: string;
    state: string;
    city: string;
    created_at: string;
    updated_at: string;
    lender: {
      id: number;
      code: string;
      name: string;
      type: string[];
      website: string;
      bank_form_1: {
        name: string;
        path: string;
      } | null;
      bank_form_2: {
        name: string;
        path: string;
      } | null;
      bank_form_3: {
        name: string;
        path: string;
      } | null;
      lender_details: LenderDetail[];
      created_at: string;
      updated_at: string;
    };
    contact_person: ContactPerson;
  };
}

export interface LenderDetail {
  id: number;
  lender_id: number;
  base_rate: string;
  spread_rate: string;
  rate: string;
  min_loan_amount: string;
  max_loan_amount: string;
  loan_type: string;
  property_type: string[];
  restricted_properties: string[];
  min_fico: number;
  ltv: string;
  ltc: string;
  dscr: string;
  origination_points: string;
  other_closing_cost: string;
  referral_fee: string;
  time_to_close: string;
  credit_usage: string;
  use_of_funds: string[];
  restricted_use_of_funds: string[];
  additional_features: string[];
  required_docs: string[];
  states: string[];
  restricted_states: string[];
  web_link: string;

}

// Interface for contact person details
export interface ContactPerson {
  id: number;
  lender_id: number;
  name: string;
  email: string;
  phone_code: string;
  phone: string;
  loan_type: string | null;
  branch: string;
  state: string;
  city: string;
  otp_code: string | null;
  otp_expires_at: string | null;
  default: boolean | null;
  created_at: string;
  updated_at: string;
}
