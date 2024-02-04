

// const convertData = (data, type) => {
//     const convertedData = data[type].map((item) => {
//         return {
//             date: item[0],
//             [type]: item[1],
//         };
//     });
//     return convertedData;
// }

// export { convertData };
const convertData = (data, type) => {
    if (!data || !data[type] || !Array.isArray(data[type])) {

        return [];
    }

    const convertedData = data[type].map((item) => {
        return {
            date: item[0],
            [type]: item[1],
        };
    });

    return convertedData;
};
export { convertData };