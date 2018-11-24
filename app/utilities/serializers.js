export function normalize(payload, modelName, pluralModelName) {
  return {
    data: payload[pluralModelName].map(item => {
      return {
        id: item.id,
        type: modelName,
        attributes: item
      }
    }),
    meta: {}
  }
}
