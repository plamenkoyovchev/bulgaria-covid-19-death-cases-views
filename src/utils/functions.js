// Data format
// [
//     "Дата",
//     "Пол",
//     "Възрастова група",
//     "Брой починали"
// ]

const ageRangeIndex = 2;
const deathsCountIndex = 3;

export const findDeathsCountByAgeRange = (ageRange, data) => {
    const filteredData = filterDataByAgeRange(ageRange, data);
    const result = {
        label: ageRange,
        count: filteredData.reduce((prevCount, currentRecord) => prevCount + (+currentRecord[deathsCountIndex]), 0)
    };

    return result;
};

const filterDataByAgeRange = (ageRange, data) => {
    return data.filter(rec => rec[ageRangeIndex] === ageRange);
};