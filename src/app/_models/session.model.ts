import { CreatureCard } from './creaturecard.model';
import { CreatureAction } from './creatureaction.model';
import { Resource } from './resource.model';

export class Session {
  SessionId?: number = 0;
  Token: string = '';
  AccountId: number = 0;
  CreatureCards: CreatureCard[] = [];
  Resources: Resource[] = [];
}
