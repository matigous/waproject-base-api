import * as Knex from 'knex';
import { IOrder } from 'modules/database/interfaces/order';
import { IS_DEV } from 'settings';

export async function seed(knex: Knex): Promise<any> {
  if (!IS_DEV) return;

  const orders = await knex
    .count()
    .from('Order')
    .first();

  if (Number(orders.count) > 0) return;

  const order: IOrder[] = [
    {
      id: 1,
      userId: 1,
      description: 'Notebook',
      quantity: 2,
      price: 3000.0,
      createdDate: new Date(),
      updatedDate: new Date()
    },
    {
      id: 2,
      userId: 2,
      description: 'Carro',
      quantity: 1,
      price: 30000.0,
      createdDate: new Date(),
      updatedDate: new Date()
    }
  ];

  await knex.insert(order).into('Order');
}
