import { CreatureAction } from './creatureaction.model';

export class CreatureCard {
    creatureCardId?: number;
    name?: string = "";
    Level?: number = 0;
    ac?: number = 10;
    initiative?: number = 7;
    currentHP?: number = 10;
    MaxHP?: number = 10;
    pPerception?: number = 10;
    pInvestigation?: number = 10;
    pInsight?: number = 10;
    strength?: number = 10;
    dexterity?: number = 10;
    constitution?: number = 10;
    intelligence?: number = 10;
    wisdom?: number = 10;
    charisma?: number = 10;

    notes?: string = "";
    isHostile?: boolean = false;
    actions?: CreatureAction[] = [];
}
