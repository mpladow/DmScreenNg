import { Resource } from './resource.model';

export class AccountResource {
  AccountResourceId?: number;
  AccountId?: number = 0;
  ResourceId?: number = 0;
  Resources?: Resource[] = [];
  Sequence?: number = 0;
  constructor(accountId:number, resource:Resource, sequence: number){

  }
}
