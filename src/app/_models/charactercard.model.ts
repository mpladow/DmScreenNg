export class CharacterCard {
    CharacterCardId?: number;
    Name?: string = "";
    Level?: number = 0;
    AC?: number = 10;
    Initiative?: number = 7;
    CurrentHP?: number = 10;
    MaxHP?: number = 10;
    PPerception?: number = 10;
    PInvestigation?: number = 10;
    PInsight?: number = 10;
    Strength? : number = 10;
    Dexterity?:number = 10;
    Notes?: string = "";
    isHostile?: boolean = false;
    Actions: string[] = [];
}
