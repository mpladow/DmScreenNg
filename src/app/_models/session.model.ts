import { CreatureCard } from './creaturecard.model';
import { CreatureAction } from './creatureaction.model';
import { Resource } from './resource.model';

export class Session {
  SessionId?: number = 0;
  Token: string = '';
  accountId: number = 0;
  creatureCards: CreatureCard[] = [];
  resources: Resource[] = [];
}
