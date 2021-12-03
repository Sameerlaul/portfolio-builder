export class WorkTimeLineModel {

    constructor(
        public startDate: Date,
        public endDate: Date,
        public jobTitle: string,
        public companyName: string,
        public responsibilities: string[]
    ){}
}