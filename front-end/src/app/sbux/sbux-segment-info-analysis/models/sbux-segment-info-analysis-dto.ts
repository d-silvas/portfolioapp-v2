export interface SbuxSegmentInfoAnalysisDto {
  id: number;
  period: string;
  calendarYear: number;
  totalRevenues: number;
  totalRevenuesDelta: number;
  totalRevenuesCagr5: number;
  totalNumStores: number;
  totalNumStoresDelta: number;
  totalNumStoresCagr5: number;
  northAmericaRevenues: number;
  northAmericaRevenuesAsProportionOfTotalRevenues: number;
  northAmericaRevenuesDelta: number;
  northAmericaRevenuesCagr5: number;
  northAmericaNumStores: number;
  northAmericaNumStoresAsProportionOfTotalStores: number;
  northAmericaNumStoresDelta: number;
  northAmericaNumStoresCagr5: number;
  northAmericaRevenuePerStore: number;
  northAmericaRevenuePerStoreDelta: number;
  northAmericaRevenuePerStoreCagr5: number;
  internationalRevenues: number;
  internationalRevenuesAsProportionOfTotalRevenues: number;
  internationalRevenuesDelta: number;
  internationalRevenuesCagr5: number;
  internationalNumStores: number;
  internationalNumStoresAsProportionOfTotalStores: number;
  internationalNumStoresDelta: number;
  internationalNumStoresCagr5: number;
  internationalRevenuePerStore: number;
  internationalRevenuePerStoreDelta: number;
  internationalRevenuePerStoreCagr5: number;
  channelDevelopmentRevenues: number;
  channelDevelopmentRevenuesAsProportionOfTotalRevenues: number;
  channelDevelopmentRevenuesDelta: number;
  channelDevelopmentRevenuesCagr5: number;
  otherRevenues: number;
  otherRevenuesAsProportionOfTotalRevenues: number;
}
