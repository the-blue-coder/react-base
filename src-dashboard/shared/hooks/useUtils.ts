import { DEFAULT_CURRENCY } from "shared/constants/currency.constant";

const useUtils = () => {
    const formatNumber = (value: number, locale: string = "fr-FR") => {
        return new Intl.NumberFormat(locale).format(value);
    };

    const formatNumberToCurrency = (value: number, currency?: string) => {
        return `${formatNumber(value)} ${currency ?? DEFAULT_CURRENCY}`;
    };

    const sortArrayAsc = (array: number[]) => {
        const sortedArray = [...array];
        sortedArray.sort((a, b) => a - b);
        return sortedArray;
    };

    return { formatNumber, formatNumberToCurrency, sortArrayAsc };
};

export default useUtils;
