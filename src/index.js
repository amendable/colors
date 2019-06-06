const defaultMatch = [
  'color',
  'backgroundColor',
  'borderColor',
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor',
  'outlineColor',
  'fill'
]

export default ({ colors = {}, match = defaultMatch }) => ({
  match,
  resolve: ({ key, value }) => ({
    [key]: colors[value] || value,
  }),
})
