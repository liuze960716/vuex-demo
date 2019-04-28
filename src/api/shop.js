const _products = [
  {'id': 1, 'title': 'CD', 'price': 50, 'inventory': 10},
  {'id': 2, 'title': 'VCD', 'price': 100, 'inventory': 5},
  {'id': 3, 'title': 'DVD', 'price': 250, 'inventory': 2}
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (cb, errorCb) {
    setTimeout(() => { Math.random() > 0.5 ? cb() : errorCb() }, 100)
  }
}
