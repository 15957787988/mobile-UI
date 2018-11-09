import Cell from './src/cell.vue'
Cell.install = function (Vue) {
  Vue.component(Cell.name, Cell)
}
export default Cell
