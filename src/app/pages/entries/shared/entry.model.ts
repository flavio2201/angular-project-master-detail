import { Category } from './../../categories/shared/category.model';
export class Entry {

  constructor(
    public id?: number,
    public name?: string,
    public descriptio?: string,
    public type?: string,
    public amount?: string,
    public data?: string,
    public paid?: boolean,
    public catogoryId?: number,
    public catogory?: Category,
  ) {}

  static types = {
    expense: 'Despesa',
    revenue: 'Receita'
  };

  get paidText(): string {
    return this.paid ? 'Pago' : 'Pendente';
  }

}
