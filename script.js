class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {

        const newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this
    }

    pop() {
        let current = this.head
        if (!this.head) {
            return undefined
        } else if (this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            let newTail = null
            while (current.next) {
                newTail = current
                current = current.next
            }
            this.tail = newTail
/*             this.tail.next = null
 */        }
        this.length--
        return current
    }

    shift() {
        if (!this.head) {
            return undefined
        } else if (this.head.next) {
            this.head = this.head.next
        } else {
            this.head = null
            this.tail = null
        }
        this.length--
        return this.head
    }

    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    get(index) {
        if (index >= this.length || index < 0) return null
        let current = this.head
        let i = 0
        while (i !== index) {
            current = current.next
            i++
        }
        return current
    }

    reverse() {
        if (!this.head) return undefined

        this.tail = this.head

        let previous = null
        let current = this.head
        let following = null

        while (current) {
            following = current.next
            current.next = previous
            previous = current
            current = following
        }
        this.head = previous
        return this
    }

    getLength() {
        if (!this.head) return 0
        let length = 0
        let current = this.head
        while (current) {
            current = current.next
            length++
        }
        return length
    }

    remove(n) {
        if (n >= this.length || n < 0) return null
        let current = this.head
        let previous = null
        let i = 0
        while (i !== n) {
            previous = current
            current = current.next
            i++
        }
        previous.next = current.next

        return this.head
    }

    removeNthFromEnd(n) {
        const length = this.getLength()
        return this.remove(length - n)
    }

}