const defaultMatch = [
  'color',
  'backgroundColor',
  'fill'
]

const colorsMiddleware = ({ colors = {}, match = defaultMatch }) => ({
  match,
  resolve: ({ key, value }) => ({
    [key]: colors[value] || value,
  }),
})

export default colorsMiddleware
