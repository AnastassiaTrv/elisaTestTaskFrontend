/**
 * Product price model interface to store the information from api
 */
export interface IPrice {
  id: number;
  recurringPrice: number;
  oneTimePrice: number;
  recurringCount: number;
}
