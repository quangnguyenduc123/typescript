class DataStorage<T>{
    private data: Array<T> = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const text = new DataStorage<string>()
text.addItem('Quang')
text.addItem('Binh')
text.removeItem('Binh')
text.getItems()

// in addition string we can have datastorage with type of number,... or union type....
const number = new DataStorage<number>()
number.addItem(1)
number.addItem(2)
number.removeItem(1)
number.getItems()