const useUtils = () => {
    const sortArrayAsc = (array: number[]) => {
        const sortedArray = [...array];
        sortedArray.sort((a, b) => a - b);
        return sortedArray;
    };

    return { sortArrayAsc };
};

export default useUtils;
