const dummy =
  `0330000000
09012345678
0120000000
0764000000
076400 0 0 0 0
076-400-0000
0764-00-0000
07640-00----0----00
０76４00０00０

076400000
1234-56-7890
1234-56-78901
+78005553535
あいうえお
0764
076`
const formatTel = tel => {
  if (tel === '') return ''
  if (!/^[0０]/.test(tel) || !libphonenumber.isValidNumber(tel, 'JP')) return `${tel}(ERROR)`
  return new libphonenumber.AsYouType('JP').input(tel)
}
const butotnClick = _ => {
  const valueStr = document.getElementById('input').value
  const valueAyr = valueStr.split(/\r\n|\n/)
  const tellAry = valueAyr.map(e => formatTel(e))
  const tellStr = tellAry.join('\r\n')
  document.getElementById('output').value = tellStr
}
window.onload = _ => {
  document.getElementById('input').value = dummy
  document.getElementById('create').onclick = butotnClick
}