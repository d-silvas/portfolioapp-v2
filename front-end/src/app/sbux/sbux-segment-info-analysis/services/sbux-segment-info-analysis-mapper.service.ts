import { Injectable } from '@angular/core';
import { SbuxSegmentInfoAnalysis, SbuxSegmentInfoAnalysisDto } from '../models';

@Injectable({ providedIn: 'root' })
export class SbuxSegmentInfoAnalysisMapperService {
  map(
    sbuxSegmentInfoAnalysisDto: SbuxSegmentInfoAnalysisDto
  ): SbuxSegmentInfoAnalysis {
    return {
      id: sbuxSegmentInfoAnalysisDto.id,
      period: sbuxSegmentInfoAnalysisDto.period,
      calendarYear: sbuxSegmentInfoAnalysisDto.calendarYear,
      totalRevenues: sbuxSegmentInfoAnalysisDto.totalRevenues,
      totalRevenuesDelta: sbuxSegmentInfoAnalysisDto.totalRevenuesDelta,
      totalRevenuesCagr5: sbuxSegmentInfoAnalysisDto.totalRevenuesCagr5,
      totalNumStores: sbuxSegmentInfoAnalysisDto.totalNumStores,
      totalNumStoresDelta: sbuxSegmentInfoAnalysisDto.totalNumStoresDelta,
      totalNumStoresCagr5: sbuxSegmentInfoAnalysisDto.totalNumStoresCagr5,
      northAmericaRevenues: sbuxSegmentInfoAnalysisDto.northAmericaRevenues,
      northAmericaRevenuesAsProportionOfTotalRevenues:
        sbuxSegmentInfoAnalysisDto.northAmericaRevenuesAsProportionOfTotalRevenues,
      northAmericaRevenuesDelta:
        sbuxSegmentInfoAnalysisDto.northAmericaRevenuesDelta,
      northAmericaRevenuesCagr5:
        sbuxSegmentInfoAnalysisDto.northAmericaRevenuesCagr5,
      northAmericaNumStores: sbuxSegmentInfoAnalysisDto.northAmericaNumStores,
      northAmericaNumStoresAsProportionOfTotalStores:
        sbuxSegmentInfoAnalysisDto.northAmericaNumStoresAsProportionOfTotalStores,
      northAmericaNumStoresDelta:
        sbuxSegmentInfoAnalysisDto.northAmericaNumStoresDelta,
      northAmericaNumStoresCagr5:
        sbuxSegmentInfoAnalysisDto.northAmericaNumStoresCagr5,
      northAmericaRevenuePerStore:
        sbuxSegmentInfoAnalysisDto.northAmericaRevenuePerStore,
      northAmericaRevenuePerStoreDelta:
        sbuxSegmentInfoAnalysisDto.northAmericaRevenuePerStoreDelta,
      northAmericaRevenuePerStoreCagr5:
        sbuxSegmentInfoAnalysisDto.northAmericaRevenuePerStoreCagr5,
      internationalRevenues: sbuxSegmentInfoAnalysisDto.internationalRevenues,
      internationalRevenuesAsProportionOfTotalRevenues:
        sbuxSegmentInfoAnalysisDto.internationalRevenuesAsProportionOfTotalRevenues,
      internationalRevenuesDelta:
        sbuxSegmentInfoAnalysisDto.internationalRevenuesDelta,
      internationalRevenuesCagr5:
        sbuxSegmentInfoAnalysisDto.internationalRevenuesCagr5,
      internationalNumStores: sbuxSegmentInfoAnalysisDto.internationalNumStores,
      internationalNumStoresAsProportionOfTotalStores:
        sbuxSegmentInfoAnalysisDto.internationalNumStoresAsProportionOfTotalStores,
      internationalNumStoresDelta:
        sbuxSegmentInfoAnalysisDto.internationalNumStoresDelta,
      internationalNumStoresCagr5:
        sbuxSegmentInfoAnalysisDto.internationalNumStoresCagr5,
      internationalRevenuePerStore:
        sbuxSegmentInfoAnalysisDto.internationalRevenuePerStore,
      internationalRevenuePerStoreDelta:
        sbuxSegmentInfoAnalysisDto.internationalRevenuePerStoreDelta,
      internationalRevenuePerStoreCagr5:
        sbuxSegmentInfoAnalysisDto.internationalRevenuePerStoreCagr5,
      channelDevelopmentRevenues:
        sbuxSegmentInfoAnalysisDto.channelDevelopmentRevenues,
      channelDevelopmentRevenuesAsProportionOfTotalRevenues:
        sbuxSegmentInfoAnalysisDto.channelDevelopmentRevenuesAsProportionOfTotalRevenues,
      channelDevelopmentRevenuesDelta:
        sbuxSegmentInfoAnalysisDto.channelDevelopmentRevenuesDelta,
      channelDevelopmentRevenuesCagr5:
        sbuxSegmentInfoAnalysisDto.channelDevelopmentRevenuesCagr5,
      otherRevenues: sbuxSegmentInfoAnalysisDto.otherRevenues,
      otherRevenuesAsProportionOfTotalRevenues:
        sbuxSegmentInfoAnalysisDto.otherRevenuesAsProportionOfTotalRevenues,
    };
  }
}
