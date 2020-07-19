export const generateOptions = (array, lang = '') => {
  if (!array?.length) return [];

  return array.map((item) => ({
    value: item.id,
    label: item[`name${lang ? `_${lang}` : ''}`],
  }));
};
