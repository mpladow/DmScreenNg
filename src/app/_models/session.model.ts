import { CreatureCard } from './creaturecard.model';
import { CreatureAction } from './creatureaction.model';
import { Resource } from './resource.model';

export class Session {
  SessionId?: number = 0;
  CreatureCard: CreatureCard[] = [];
  Resource: Resource[] = [];
}
