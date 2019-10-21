// Take an array 
// return an obj with key is item, value is its index
const itemIndexMap = array => {
    return array.reduce((obj, item, index) => {
        obj[item] = index;
        return obj;
    }, {});
};

// Take array of object and an object like this: COLUMN_SCHEMA = {
//     NAMES: ['account', 'accountName', 'currencyCode', 'amount', 'transactionType']
// }
// return an object with selected specifc fields from an array of object
export const selectedCols = (data, fields) => {
        const orderMap = itemIndexMap(fields);
        return data.map(item => Object.keys(item)
        .filter(item => fields.includes(item))
        .reduce((acc, item) => {
            acc[orderMap[item]] = item;
            return acc;
        },[])
        .reduce((acc, key) => {
          acc[key] = item[key];
          return acc;
        }, {}));
}

export const camelcaseToWords = (str) => {
    if (str && str.length === 0) return '';
    return str.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
}