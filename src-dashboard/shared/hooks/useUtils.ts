import _ from "lodash";
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

    const camelCaseToWords = (string: string, capitalize = true) => {
        const wordsArray = string.replace(/([a-z])([A-Z])/g, "$1 $2").split(/[\s_]+/);
        const words = wordsArray.join(" ").toLowerCase();

        return capitalize ? _.capitalize(words) : words;
    };

    const snakeCaseToWords = (string: string, capitalize = true) => {
        const words = string.replace(/_/g, " ");
        return capitalize ? _.capitalize(words) : words;
    };

    const slugify = (string: string): string => {
        return string
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/-+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
    };

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return {
        formatNumber,
        formatNumberToCurrency,
        sortArrayAsc,
        camelCaseToWords,
        snakeCaseToWords,
        slugify,
        capitalizeFirstLetter,
    };
};

export default useUtils;
