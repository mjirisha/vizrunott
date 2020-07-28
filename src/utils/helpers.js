export const generateOptions = (array, lang = '') => {
  if (!array?.length) return [];

  return array.map((item) => ({
    value: item.id,
    label: item[`name${lang ? `_${lang}` : ''}`],
  }));
};

export const filterNumeric = (event) => {
  if (Number.isNaN(parseInt(event.key, 10)) && event.key !== 'Enter')
    event.preventDefault();
};
