const path = require('path')
const screenshot = require('..')


console.time('screenshot old')

screenshot.listDisplays()
  .then((displays) => {
    console.log(displays)
    for (let index = 0; index < displays.length; index++) {
      const display = displays[index]
      const imgpath = path.join(__dirname, Date.now() + '_' + index + '.png')
      console.time(`screenshot_old_${index}`)
      // screenshot.darwinSnapshotFast({ screen: display.id, filename: imgpath }, displays).then((imgpath) => {
      screenshot({ screen: display.id, filename: imgpath }).then((imgpath) => {
        console.log(imgpath)
      console.timeEnd(`screenshot_old_${index}`)
      }).catch(err => {
        console.error(err)
      })
    }

    console.timeEnd('screenshot old')
  })
  
console.time('screenshot new')
  
  screenshot.listDisplays()
  .then((displays) => {
    console.log(displays)
    for (let index = 0; index < displays.length; index++) {
      const display = displays[index]
      const imgpath = path.join(__dirname, Date.now() + '_' + index + '.png')
      console.time(`screenshot_new_${index}`)
      // screenshot.darwinSnapshotFast({ screen: display.id, filename: imgpath }, displays).then((imgpath) => {
      screenshot({ screen: display.id, filename: imgpath,  displays }).then((imgpath) => {
        console.log(imgpath)
      console.timeEnd(`screenshot_new_${index}`)
      }).catch(err => {
        console.error(err)
      })
    }

    console.timeEnd('screenshot new')
  })

// screenshot.listDisplays()
//   .then((displays) => {
//     console.log(displays)
//     for (let index = 0; index < displays.length; index++) {
//       const display = displays[index]
//       screenshot({ screen: display.id }).then((imgbuf) => {
//         console.log(imgbuf)
//       }).catch(err => {
//         console.error(err)
//       })
//     }
//   })
