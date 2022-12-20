if (window.location.search.indexOf('no_nav=true') > -1) {
  document.querySelectorAll('.bigbox-wrapper').forEach((obj) => {
    obj.style.minHeight = '0px'
    obj.style.padding = '0px'
    obj.style.margin = '0px'
  })
  document
    .querySelectorAll(
      '[data-sc-c="header"], [data-sc-c="sidenavmenu"], [data-sc-c="basenav"], [data-sc-c="fixedheaderspacer"]'
    )
    .forEach((obj) => (obj.style.display = 'none'))
}
