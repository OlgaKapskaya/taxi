const errors = {
  empty: 'Введите адрес',
  invalid: 'Неверный адрес. Формат ввода: Улица, номер дома.',
}

export const addressValidation = (address: string): string => {
  const regexp = /^(\d{1,2}-?[а-яё]\s)?([А-Яа-я]\s?)+(,?\s{1,3})(\d{1,4})([\\\/]\d{1,4})?$/i
  if (address.trim() === '') return errors.empty
  else if (!regexp.test(address)) return errors.invalid
  else return ''
}
