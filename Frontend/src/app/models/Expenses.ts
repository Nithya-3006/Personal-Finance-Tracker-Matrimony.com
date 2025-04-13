export interface Expenses{
    id?:number;
    title: string;
    amount: number;
    category: string;
    date: Date;
    created_at?: Date;
}