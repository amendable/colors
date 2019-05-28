const defaultMatch = [
  'color',
  'backgroundColor',
  'fill'
]

export default ({ colors = {}, match = defaultMatch }) => ({
  match,
  resolve: ({ key, value }) => ({
    [key]: colors[value] || value,
  }),
})
