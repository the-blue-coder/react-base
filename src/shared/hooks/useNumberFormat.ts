import { DEFAULT_CURRENCY } from "../constants/currency.constant";

const useNumberFormat = () => {
    const format = (value: number, locale: string = "fr-FR") => {
        return new Intl.NumberFormat(locale).format(value);
    };

    const formatToCurrency = (value: number, currency?: string) => {
        return `${format(value)} ${currency ?? DEFAULT_CURRENCY}`;
    };

    return { format, formatToCurrency };
};

export default useNumberFormat;
