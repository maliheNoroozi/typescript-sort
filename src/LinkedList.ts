import { Sorter } from './Sorter'

class Node {
  next: Node | null = null
  constructor(public data: number) { }
}

export class LinkedList extends Sorter {
  head: Node | null = null

  add(data: number): void {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      return
    }

    let tail = this.head
    while (tail.next) {
      tail = tail.next
    }

    tail.next = node
  }

  get length(): number {
    if (!this.head) {
      return 0
    }

    let length = 0
    let tail: Node | null = this.head
    while (tail) {
      length++
      tail = tail.next
    }

    return length
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Empty linked list.')
    }

    let counter = 0
    let tail: Node | null = this.head
    while (tail) {
      if (counter === index) {
        return tail
      }
      counter++
      tail = tail.next
    }

    throw new Error('Index is out of boundry')
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)
    return leftNode.data > rightNode.data
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)

    const temp = leftNode.data
    leftNode.data = rightNode.data
    rightNode.data = temp
  }

  print(): void {
    if (!this.head) {
      console.log('Empty linked list.')
      return
    }

    let tail: Node | null = this.head
    while (tail) {
      console.log(tail.data)
      tail = tail.next
    }
  }
}