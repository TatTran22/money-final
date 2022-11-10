import { toFormat, Transformer, Dinero } from 'dinero.js'

const intlFormat = (dineroObject: Dinero<number>, locale: string, options = {}) => {
  const transformer: Transformer<unknown> = ({ amount, currency }) => {
    return amount.toLocaleString(locale, {
      ...options,
      style: 'currency',
      currency: currency.code,
    })
  }

  return toFormat(dineroObject, transformer)
}

export { intlFormat }
