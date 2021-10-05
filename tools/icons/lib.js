const fs = require('fs')
const path = require('path')

const iconsDir = path.join(__dirname, './icons')
const iconsDest = path.join(__dirname, './../../client/icons')

const iconsXPage = 30

function paginate(array, page_size, page_number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size)
}

function getAllIcons() {
  const i = fs.readdirSync(iconsDir).map(x => {
    if (!fs.lstatSync(path.join(iconsDir, x)).isDirectory()) {
      return {
        name: x,
        src: `/icons/${x}`
      }
    }
    return undefined
  })
  return i.filter(x => typeof x !== 'undefined')
}

function importIcon(query) {
  const icon = searchIcons(query, 1)
  if (icon.length === 1) {
    fs.copyFileSync(
      path.join(iconsDir, icon[0].name),
      path.join(iconsDest, icon[0].name)
    )
    return {
      status: true
    }
  } else {
    return {
      status: false
    }
  }
}

function searchIcons(query, index) {
  const icons = getAllIcons()
  const search = new RegExp(query, 'i')
  const b = icons.filter(item => {
    return search.test(item.name)
  })

  return paginate(b, iconsXPage, index)
}

function getIconsByIndex(index) {
  const icons = getAllIcons()
  return paginate(icons, iconsXPage, index)
}

module.exports = {
  getIconsByIndex,
  searchIcons,
  importIcon
}
