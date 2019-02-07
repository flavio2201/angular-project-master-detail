import { Category } from './pages/shared/category.model';
import {InMemoryDbService} from 'angular-in-memory-web-api';


export class InMemoryDatabase implements InMemoryDbService {

  createDb() {
  const categories : Category [] =  [

      { id: 1, name: 'Moradia', description: 'Pagamentos de contas da casa' },
      { id: 2, name: 'Saúde', description: 'Plano de saude e Remedios' },
      { id: 4, name: 'Lazer', description: 'Recebimentos de salarios' },
      { id: 3, name: 'Salário', description: 'Recebimento de Salário' },
      { id: 5, name: 'Freelas', description: 'Recebimentos de Freelas' }

      ];
      return { categories };
    }
}
