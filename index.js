const Tesseract = require('tesseract.js')
let str = ''

Tesseract.recognize(process.argv[2])
  .progress(function  (p) { console.log('progress', p)})
  .catch(err => console.error(err))
  .then(result => console.log('THEN RESULT\n\n\n', result.text))
  .finally(resultOrError => {
      str = resultOrError
      console.log('HEREHERHEHRE', str)
    })

