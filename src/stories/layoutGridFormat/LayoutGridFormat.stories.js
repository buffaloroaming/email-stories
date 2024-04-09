import LayoutGrid from './LayoutGridFormat.vue'

export default {
  title: 'Format/LayoutGrid',
  component: LayoutGrid,
  tags: ['autodocs'],
  argTypes: {
    numOfColumns: {
      control: {
        type: 'select',
        required: true
      },
      options: [0, 1, 2, 3, 4]
    }
  }
}

export const FullWidth = {
  args: {
    numOfColumns: 0,
    contentWidth: '',
    columnLayout: ''
  }
}
export const ColumnOf1 = {
  args: {
    numOfColumns: 1,
    contentWidth: 'Content Width: 600px',
    columnLayout: [100, 600, 100]
  }
}
export const ColumnOf2 = {
  args: {
    numOfColumns: 2,
    contentWidth: '2-Column Content Width: 600px',
    columnLayout: [290, 20, 290]
  }
}
export const ColumnOf3 = {
  args: {
    numOfColumns: 3,
    contentWidth: '3-Column Content Width: 600px',
    columnLayout: [20, 174, 20, 172, 20, 174, 20]
  }
}
export const ColumnOf4 = {
  args: {
    numOfColumns: 4,
    contentWidth: '4-Column Content Width: 600px',
    columnLayout: [20, 125, 20, 125, 20, 125, 20, 125, 20]
  }
}
