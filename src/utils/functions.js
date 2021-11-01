// All
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
    const filteredData = data.filter(rec => rec[ageRangeIndex] === ageRange);
    const result = {
        label: ageRange,
        count: filteredData.reduce((prevCount, currentRecord) => prevCount + (+currentRecord[deathsCountIndex]), 0)
    };

    return result;
};

export const getKeys = (data) => {
    const map = {};

    for (const record of data) {
        if (!map[record[2]]) {
            map[record[2]] = true;
        }
    }

    return map;
};

// Only vaccinated
// ["Дата", "Ваксина", "Пол", "Възрастова група", "Брой починали"]

const vaccineIndex = 1;
const vaccinatedAgeRangeIndex = 3;
const vaccinatedDeathsCountIndex = 4;

export const groupDeathsByVaccine = (ageRange, data) => {
    const filteredData = data.filter(rec => rec[vaccinatedAgeRangeIndex] === ageRange);
    const map = {
        total: 0
    };

    for (const record of filteredData) {
        const vaccine = record[vaccineIndex];
        if (!map[vaccine]) {
            map[vaccine] = {
                count: +record[vaccinatedDeathsCountIndex]
            };
        } else {
            map[vaccine].count += +record[vaccinatedDeathsCountIndex];
        }

        map.total += +record[vaccinatedDeathsCountIndex];
    }

    return map;
};