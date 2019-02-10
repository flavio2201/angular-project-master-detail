import {InMemoryDbService} from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';
import {Entry} from './pages/entries/shared/entry.model';



export class InMemoryDatabase implements InMemoryDbService {

  createDb() {
  const categories: Category[] =  [
      { id: 1, name: 'Moradia', description: 'Pagamentos de contas da casa' },
      { id: 2, name: 'Saúde', description: 'Plano de saude e Remedios' },
      { id: 4, name: 'Lazer', description: 'Recebimentos de salarios' },
      { id: 3, name: 'Salário', description: 'Recebimento de Salário' },
      { id: 5, name: 'Freelas', description: 'Recebimentos de Freelas' }
      ];

  const entries: Entry[] =  [
        { id: 1, name: 'Despesa ABC', catogoryId: categories[0].id, catogory: categories[0], paid: true,
         date: '14/04/2019', amount: '70,80', type: 'expense', description: 'Teste' } as Entry,
         { id: 2, name: 'Despesa BCD', catogoryId: categories[1].id, catogory: categories[1], paid: false,
         date: '14/04/2019', amount: '100,50', type: 'expense', description: 'Teste' } as Entry,
         { id: 3, name: 'Despesa CFD', catogoryId: categories[2].id, catogory: categories[2], paid: true,
         date: '14/04/2019', amount: '90,45', type: 'revenue', description: 'Teste' } as Entry,
         { id: 4, name: 'Despesa KKK', catogoryId: categories[3].id, catogory: categories[3], paid: false,
         date: '14/04/2019', amount: '40,78', type: 'expense', description: 'Teste' } as Entry,
         { id: 5, name: 'Despesa LLL', catogoryId: categories[4].id, catogory: categories[4], paid: true,
         date: '14/04/2019', amount: '70,96', type: 'revenue', description: 'Teste' } as Entry
        ];

      return {categories, entries};
    }

}
