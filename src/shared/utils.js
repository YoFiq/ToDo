export const formatGraphQlData = (data) => JSON.stringify(data).replace(/"([^(")"]+)":/g, '$1:');

export const jsonCopy = (data) => JSON.parse(JSON.stringify(data));
