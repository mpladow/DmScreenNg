import { CreatureAction } from './creatureaction.model';

export class CreatureCard {
    creatureCardId?: number;
    name?: string = "";
    Level?: number = 0;
    ac?: number = 10;
    initiative?: number = 7;
    CurrentHP?: number = 10;
    MaxHP?: number = 10;
    PPerception?: number = 10;
    PInvestigation?: number = 10;
    PInsight?: number = 10;
    Strength?: number = 10;
    Dexterity?: number = 10;
    Constitution?: number = 10;
    Intelligence?: number = 10;
    wisdom?: number = 10;
    charisma?: number = 10;

    notes?: string = "";
    isHostile?: boolean = false;
    actions?: CreatureAction[] = [];
}
