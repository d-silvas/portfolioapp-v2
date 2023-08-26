import type { ElIncomeStatement } from './el-income-statement';

export interface ElFinancialReport {
  id: number;
  // TODO enum
  period: string;
  calendarYear: number;
  // TODO date
  endDate: string;
  // TODO date
  publicationDate: string;
  incomeStatement: ElIncomeStatement;
}
