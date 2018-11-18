const arr1 = []

for (i = 0; i < 5; i++) {
  arr1.push(`item ${i + 1}`)
}

const arr2 = Array.from({ length: 5 }).map((_, i) => `item ${i + 1}`)

const arr3 = Array.from()
console.log(arr1)
console.log(arr2)
