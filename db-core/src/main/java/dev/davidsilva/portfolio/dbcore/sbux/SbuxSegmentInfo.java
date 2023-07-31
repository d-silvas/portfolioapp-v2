package dev.davidsilva.portfolio.dbcore.sbux;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "sbux_segment_info", schema = "public")
public class SbuxSegmentInfo {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne()
    @JoinColumn(name = "financial_report_id")
    @JsonIgnore
    private SbuxFinancialReport financialReport;

    @Column(name = "north_america_revenues")
    private Double northAmericaRevenues;

    @Column(name = "north_america_num_stores")
    private Double northAmericaNumStores;

    @Column(name = "international_revenues")
    private Double internationalRevenues;

    @Column(name = "international_num_stores")
    private Double internationalNumStores;

    @Column(name = "channel_development_revenues")
    private Double channelDevelopmentRevenues;

    @Column(name = "other_revenues")
    private Double otherRevenues;
}
