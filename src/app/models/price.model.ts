import * as bigdecimal from 'bigdecimal/lib/bigdecimal';
/**
 * Product price model interface to store the information from api
 */
export interface IPrice {
  id: number;
  recurringPrice: bigdecimal.BigDecimal;
  oneTimePrice: bigdecimal.BigDecimal;
  recurringCount: number;
}
