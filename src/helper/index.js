export const formatPhoneNumber = (value) => {
  if (!value) return '';

  let cleaned = value.replace(/\D/g, '');

  let match = cleaned.match(/^(\d{3})(\d{3})(\d{0,4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}${match[3] ? '-' + match[3] : ''}`;
  }

  return value;
};
