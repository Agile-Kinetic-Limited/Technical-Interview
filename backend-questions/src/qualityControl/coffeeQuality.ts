import { IBrewCalculator, ICoffeeBean, GrindSize, QualityException } from "./interfaces";

export class CoffeeQuality {
    private readonly brewCalculator: IBrewCalculator;

    constructor(brewCalculator: IBrewCalculator) {
        this.brewCalculator = brewCalculator;
    }

    public calculateQuality(bean: ICoffeeBean, grindSize: GrindSize, brewingTime: number): number {
        const baseQuality = this.getBaseQuality(bean);
        const grindImpact = this.getGrindImpact(grindSize);
        const timeAdjustment = this.getTimeAdjustment(brewingTime);

        if ((baseQuality * grindImpact) + timeAdjustment > 100) {
            throw new QualityException('Coffee quality too high!');
        }

        return (baseQuality * grindImpact) + timeAdjustment;
    }

    private getBaseQuality(bean: ICoffeeBean): number {
        return this.brewCalculator.getBeanQuality(bean.type, bean.grade);
    }

    private getGrindImpact(grindSize: GrindSize): number {
        switch (grindSize) {
            case GrindSize.FINE: return 1.3;
            case GrindSize.MEDIUM: return 1.0;
            case GrindSize.COARSE: return 0.8;
            default: return 1.0;
        }
    }

    private getTimeAdjustment(brewingTime: number): number {
        return this.brewCalculator.getTimeAdjustment(brewingTime);
    }
}