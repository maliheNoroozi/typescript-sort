import { Numbers } from './Numbers'
import { Characters } from './characters'
import { LinkedList } from './LinkedList'

const numbers = new Numbers([10, 3, -5, 0])
numbers.sort()
console.log('Sorted numbers => ', numbers.data)

const characters = new Characters('aSbemAN')
characters.sort()
console.log('Sorted string => ', characters.data)

const linkedList = new LinkedList()
linkedList.add(10)
linkedList.add(3)
linkedList.add(-5)
linkedList.add(0)
linkedList.add(-2)
linkedList.sort()
console.log('Sorted linked list => ')
linkedList.print()
