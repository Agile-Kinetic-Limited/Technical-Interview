export enum CoffeeBeanQuality {
    PREMIUM,
    STANDARD,
    ECONOMY
}

export enum GrindSize {
    EXTRA_FINE,
    FINE,
    MEDIUM,
    COARSE
}

export interface ICoffeeBean {
    type: CoffeeBeanQuality;
    grade: number; // Quality grade of the bean from 1 to 10
}

export interface IBrewCalculator {
    getBeanQuality(type: CoffeeBeanQuality, grade: number): number;
    getTimeAdjustment(brewingTime: number): number;
}

export class QualityException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'QualityException';
    }
}
