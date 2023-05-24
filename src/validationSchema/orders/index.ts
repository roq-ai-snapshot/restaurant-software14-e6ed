import * as yup from 'yup';
import { order_itemsValidationSchema } from 'validationSchema/order_items';

export const ordersValidationSchema = yup.object().shape({
  status: yup.string().required(),
  order_type: yup.string().required(),
  special_requests: yup.string(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  customer_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
  order_items: yup.array().of(order_itemsValidationSchema),
});
