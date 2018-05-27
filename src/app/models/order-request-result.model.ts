import {IOrderError} from './order-error.model';

/**
 * This interface represents order request result data model
 */
export interface IOrderRequestResult {
  /**
   * Added customers id
   */
  customerId: number;

  /**
   * Added orders id
   */
  orderId: number;

  /**
   * Count of order lines added
   */
  addedCount: number;

  /**
   * Order submit operation success
   */
  success: boolean;

  /**
   * Map of validation errors
   */
  errors: IOrderError;
}
