const defaultMatch = [
  'color',
  'backgroundColor',
  'fill'
]

const colorsMiddleware = ({ colors = {}, match = defaultMatch }) => ({
  match,
  resolve: ({ key, value }) => ({
    color: colors[value] || value,
  }),
})

export default colorsMiddleware
