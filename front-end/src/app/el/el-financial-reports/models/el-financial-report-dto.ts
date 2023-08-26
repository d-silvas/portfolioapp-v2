import type { ElIncomeStatement } from './el-income-statement';

export interface ElFinancialReportDto {
  id: number;
  period: string;
  calendarYear: number;
  endDate: string;
  publicationDate: string;
  incomeStatement: ElIncomeStatement;
}
