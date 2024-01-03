/* eslint-disable no-useless-escape */
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

    const autoLink = (text: string) => {
        const delimiter =
            /((?:https?:\/\/)?(?:(?:[a-z0-9]?(?:[a-z0-9-]{1,61}[a-z0-9])?\.[^\.|\s])+[a-z\.]*[a-z]+|(?:25[0-5]|2[0-4][\d]|[01]?[\d][\d]?)(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})(?::\d{1,5})*[a-z0-9.,_\/~#&=;%+?\-\\(\\)]*)/gi;

        return text
            .split(delimiter)
            .map((word) => {
                const match = word.match(delimiter);
                if (match) {
                    const url = match[0];
                    return `<a key="${slugify(word)}" href="${url.startsWith("http") ? url : `http://${url}`}" target="_blank">${url}</a>`;
                }
                return word;
            })
            .join(" ");
    };

    const generateUniqueId = () => {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 1000);

        return `${timestamp}${random}`;
    };

    const getFilenameFromBlob = (blob: Blob): string => {
        const match = blob.type.match(/name=([^;]+)/);

        return match ? match[1] : "";
    };

    return {
        formatNumber,
        formatNumberToCurrency,
        sortArrayAsc,
        camelCaseToWords,
        snakeCaseToWords,
        slugify,
        capitalizeFirstLetter,
        autoLink,
        generateUniqueId,
        getFilenameFromBlob,
    };
};

export default useUtils;
