const glob = require('glob')
const fs = require('fs')
import { currencyList } from './currency'
// const currencyImages = glob('../assets/images/country-flag/*.png')
glob('../assets/images/country-flag/*.png', {}, function (er: any, files: string[]) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  //   console.log(files)
  const paths = files.map((f) => {
    const fArray = f.split('/')
    return fArray[fArray.length - 1]
  })

  const result = currencyList.map((c) => {
    const name = paths.find((p) => Number(p.split('-')[0]) - 1 == c.id)
    return {
      ...c,
      currency_image_name: name,
    }
  })
  console.log(result)
  const data = JSON.stringify(result)
  fs.writeFileSync('./currency.json', data)
})
// console.log(currencyImages)
