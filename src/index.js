export const defaultMatch = [
  'color',
  'backgroundColor',
  'borderColor',
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor',
  'outlineColor',
  'fill',
  'stroke',
  'placeholderTextColor',
]

export default ({ colors = {}, match = defaultMatch }) => ({
  match,
  resolve: ({ key, value }) => ({
    [key]: colors[value] || value,
  }),
})
