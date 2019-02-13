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
        new Entry( 1, 'Despesa ABC', 'Teste', 'expense', '70,80', '14/04/2019',
              true, categories[0].id, categories[0]),
              new Entry( 2, 'Despesa CCC', 'Teste 2', 'revenue', '90,50', '17/04/2019',
              true, categories[1].id, categories[1]),
              new Entry( 3, 'Despesa DDD', 'Teste 4', 'revenue', '100,50', '20/05/2019',
              true, categories[3].id, categories[3])
        ];

      return {categories, entries};
    }

}
