import { Injectable } from '@angular/core';
import {
  SbuxSegmentInfoAnalysis,
  SbuxSegmentInfoAnalysisTableInfo,
} from '../models';

@Injectable({ providedIn: 'root' })
export class SbuxSegmentInfoAnalysisTableInfoMapperService {
  map(
    segmentInfoAnalysis: SbuxSegmentInfoAnalysis[]
  ): SbuxSegmentInfoAnalysisTableInfo {
    const sbuxSegmentInfoAnalysisTableInfo: SbuxSegmentInfoAnalysisTableInfo = {
      id: [],
      period: [],
      totalRevenues: [],
      totalRevenuesDelta: [],
      totalRevenuesCagr5: [],
      totalNumStores: [],
      totalNumStoresDelta: [],
      totalNumStoresCagr5: [],
      northAmericaRevenues: [],
      northAmericaRevenuesAsProportionOfTotalRevenues: [],
      northAmericaRevenuesDelta: [],
      northAmericaRevenuesCagr5: [],
      northAmericaNumStores: [],
      northAmericaNumStoresAsProportionOfTotalStores: [],
      northAmericaNumStoresDelta: [],
      northAmericaNumStoresCagr5: [],
      northAmericaRevenuePerStore: [],
      northAmericaRevenuePerStoreDelta: [],
      northAmericaRevenuePerStoreCagr5: [],
      internationalRevenues: [],
      internationalRevenuesAsProportionOfTotalRevenues: [],
      internationalRevenuesDelta: [],
      internationalRevenuesCagr5: [],
      internationalNumStores: [],
      internationalNumStoresAsProportionOfTotalStores: [],
      internationalNumStoresDelta: [],
      internationalNumStoresCagr5: [],
      internationalRevenuePerStore: [],
      internationalRevenuePerStoreDelta: [],
      internationalRevenuePerStoreCagr5: [],
      channelDevelopmentRevenues: [],
      channelDevelopmentRevenuesAsProportionOfTotalRevenues: [],
      channelDevelopmentRevenuesDelta: [],
      channelDevelopmentRevenuesCagr5: [],
      otherRevenues: [],
      otherRevenuesAsProportionOfTotalRevenues: [],
    };
    for (const [
      index,
      singleSegmentInfoAnalysis,
    ] of segmentInfoAnalysis.entries()) {
      sbuxSegmentInfoAnalysisTableInfo.id.push(singleSegmentInfoAnalysis.id);
      // TODO
      sbuxSegmentInfoAnalysisTableInfo.period.push(
        `FY${singleSegmentInfoAnalysis.calendarYear}`
      );
      sbuxSegmentInfoAnalysisTableInfo.totalRevenues.push(
        singleSegmentInfoAnalysis.totalRevenues
      );
      sbuxSegmentInfoAnalysisTableInfo.totalRevenuesDelta.push(
        singleSegmentInfoAnalysis.totalRevenuesDelta
      );
      sbuxSegmentInfoAnalysisTableInfo.totalRevenuesCagr5.push(
        singleSegmentInfoAnalysis.totalRevenuesCagr5
      );
      sbuxSegmentInfoAnalysisTableInfo.totalNumStores.push(
        singleSegmentInfoAnalysis.totalNumStores
      );
      sbuxSegmentInfoAnalysisTableInfo.totalNumStoresDelta.push(
        singleSegmentInfoAnalysis.totalNumStoresDelta
      );
      sbuxSegmentInfoAnalysisTableInfo.totalNumStoresCagr5.push(
        singleSegmentInfoAnalysis.totalNumStoresCagr5
      );
      sbuxSegmentInfoAnalysisTableInfo.northAmericaRevenues.push(
        singleSegmentInfoAnalysis.northAmericaRevenues
      );
      sbuxSegmentInfoAnalysisTableInfo.northAmericaRevenuesAsProportionOfTotalRevenues.push(
        singleSegmentInfoAnalysis.northAmericaRevenuesAsProportionOfTotalRevenues
      );
      sbuxSegmentInfoAnalysisTableInfo.northAmericaRevenuesDelta.push(
        singleSegmentInfoAnalysis.northAmericaRevenuesDelta
      );
      sbuxSegmentInfoAnalysisTableInfo.northAmericaRevenuesCagr5.push(
        singleSegmentInfoAnalysis.northAmericaRevenuesCagr5
      );
      sbuxSegmentInfoAnalysisTableInfo.northAmericaNumStores.push(
        singleSegmentInfoAnalysis.northAmericaNumStores
      );
      sbuxSegmentInfoAnalysisTableInfo.northAmericaNumStoresAsProportionOfTotalStores.push(
        singleSegmentInfoAnalysis.northAmericaNumStoresAsProportionOfTotalStores
      );
      sbuxSegmentInfoAnalysisTableInfo.northAmericaNumStoresDelta.push(
        singleSegmentInfoAnalysis.northAmericaNumStoresDelta
      );
      sbuxSegmentInfoAnalysisTableInfo.northAmericaNumStoresCagr5.push(
        singleSegmentInfoAnalysis.northAmericaNumStoresCagr5
      );
      sbuxSegmentInfoAnalysisTableInfo.northAmericaRevenuePerStore.push(
        singleSegmentInfoAnalysis.northAmericaRevenuePerStore
      );
      sbuxSegmentInfoAnalysisTableInfo.northAmericaRevenuePerStoreDelta.push(
        singleSegmentInfoAnalysis.northAmericaRevenuePerStoreDelta
      );
      sbuxSegmentInfoAnalysisTableInfo.northAmericaRevenuePerStoreCagr5.push(
        singleSegmentInfoAnalysis.northAmericaRevenuePerStoreCagr5
      );
      sbuxSegmentInfoAnalysisTableInfo.internationalRevenues.push(
        singleSegmentInfoAnalysis.internationalRevenues
      );
      sbuxSegmentInfoAnalysisTableInfo.internationalRevenuesAsProportionOfTotalRevenues.push(
        singleSegmentInfoAnalysis.internationalRevenuesAsProportionOfTotalRevenues
      );
      sbuxSegmentInfoAnalysisTableInfo.internationalRevenuesDelta.push(
        singleSegmentInfoAnalysis.internationalRevenuesDelta
      );
      sbuxSegmentInfoAnalysisTableInfo.internationalRevenuesCagr5.push(
        singleSegmentInfoAnalysis.internationalRevenuesCagr5
      );
      sbuxSegmentInfoAnalysisTableInfo.internationalNumStores.push(
        singleSegmentInfoAnalysis.internationalNumStores
      );
      sbuxSegmentInfoAnalysisTableInfo.internationalNumStoresAsProportionOfTotalStores.push(
        singleSegmentInfoAnalysis.internationalNumStoresAsProportionOfTotalStores
      );
      sbuxSegmentInfoAnalysisTableInfo.internationalNumStoresDelta.push(
        singleSegmentInfoAnalysis.internationalNumStoresDelta
      );
      sbuxSegmentInfoAnalysisTableInfo.internationalNumStoresCagr5.push(
        singleSegmentInfoAnalysis.internationalNumStoresCagr5
      );
      sbuxSegmentInfoAnalysisTableInfo.internationalRevenuePerStore.push(
        singleSegmentInfoAnalysis.internationalRevenuePerStore
      );
      sbuxSegmentInfoAnalysisTableInfo.internationalRevenuePerStoreDelta.push(
        singleSegmentInfoAnalysis.internationalRevenuePerStoreDelta
      );
      sbuxSegmentInfoAnalysisTableInfo.internationalRevenuePerStoreCagr5.push(
        singleSegmentInfoAnalysis.internationalRevenuePerStoreCagr5
      );
      sbuxSegmentInfoAnalysisTableInfo.channelDevelopmentRevenues.push(
        singleSegmentInfoAnalysis.channelDevelopmentRevenues
      );
      sbuxSegmentInfoAnalysisTableInfo.channelDevelopmentRevenuesAsProportionOfTotalRevenues.push(
        singleSegmentInfoAnalysis.channelDevelopmentRevenuesAsProportionOfTotalRevenues
      );
      sbuxSegmentInfoAnalysisTableInfo.channelDevelopmentRevenuesDelta.push(
        singleSegmentInfoAnalysis.channelDevelopmentRevenuesDelta
      );
      sbuxSegmentInfoAnalysisTableInfo.channelDevelopmentRevenuesCagr5.push(
        singleSegmentInfoAnalysis.channelDevelopmentRevenuesCagr5
      );
      sbuxSegmentInfoAnalysisTableInfo.otherRevenues.push(
        singleSegmentInfoAnalysis.otherRevenues
      );
      sbuxSegmentInfoAnalysisTableInfo.otherRevenuesAsProportionOfTotalRevenues.push(
        singleSegmentInfoAnalysis.otherRevenuesAsProportionOfTotalRevenues
      );
    }
    return sbuxSegmentInfoAnalysisTableInfo;
  }
}
