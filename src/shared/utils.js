export const formatGraphQlData = (data) => JSON.stringify(data).replace(/"([^(")"]+)":/g, '$1:');
