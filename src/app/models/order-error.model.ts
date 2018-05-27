/**
 * This interface represents order validation error map data model
 */
export interface IOrderError {
  companyName: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  empty: boolean;
}
