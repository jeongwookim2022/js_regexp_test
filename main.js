let str = `
010-1234-5678d
dkdkdk@gmail.com
https://www.om
I am the boy that as oranges with red color and apples with blue color.
The boy the boy.
hd
http`
// 
// // (1)
// // const regexp = new RegExp('the', 'gi')
// // (2)
// const regexp = /the/gi
// console.log(str.match(regexp))



// //메소드
// const regexp = /red/gi
// // console.log(regexp.test(str))
// str = str.replace(regexp, 'purple')
// console.log(str)



// 플래그(옵션)
// const regexp = /.$/gim
// console.log(str.match(regexp))



// 패턴
// (1)
// const regexp = /\b\w{3}\b/g
// console.log(str.match(regexp))

// (2)
// const regexp = /[0-9]{1,}/g
// console.log(str.match(regexp))

// (3)
// const regexp = /\bt\w{1,}\b/g
// console.log(str.match(regexp))

// (4)
// const regexp = /\d{1,}/g
// console.log(str.match(regexp))

// (5)
// const h = `   hello! yo ! My name    `
// console.log(h)
// let spaces = h.replace(/\s/g, '')
// console.log(spaces)

// (6) 앞쪽 일치
// const regexp = /.{1,}(?=@)/g
// console.log(str.match(regexp))

// (7) 뒷쪽 일치
// const regexp = /(?<=@).{1,}/g
// console.log(str.match(regexp))

// (8)





