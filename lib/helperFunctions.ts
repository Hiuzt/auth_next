export const removeItemByIndex = (array: any, index: number) => {
    return array.filter((_: any, i: number) => i !== index);
};