export class Reminder {
    name?: string;
    date?: string;
    time?: string;
    endDate?: string;
    endTime?: string;
    hasDuration?: boolean;
    character?: string;
    key?: string;

   getTotalDays(): number {
        let reminderEndDate = new Date(this.endDate);
        let reminderStartDate = new Date(this.date);

        let totalDays = (<any>reminderEndDate - <any>reminderStartDate) / (1000 * 60 * 60 * 24);

        return Math.round(totalDays);

    }

    getLapsedDays(): number {
        let reminderStartDate = new Date(this.date);
        let lapsedDays = (<any>new Date() - <any>reminderStartDate) / (1000 * 60 * 60 * 24);

        return Math.round(lapsedDays);

    }

    getPercentage(): number {

        return Math.round(this.getLapsedDays()/this.getTotalDays() * 100);
    }
}