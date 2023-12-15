export type GenericSummaryTableProps = {
    summaryData: GenericSummaryDataItemType[];
    className: string;
};

export type GenericSummaryDataItemType = {
    slug: string;
    label: string;
    value: string;
};
