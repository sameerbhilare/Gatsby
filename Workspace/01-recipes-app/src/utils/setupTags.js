const setupTags = recipes => {
  const allTags = {}

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  //console.log(allTags)

  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a // array destructuring
    const [secondTag] = b // array destructuring
    return firstTag.localeCompare(secondTag) // compare strings
  })
  //console.log(newTags)

  return newTags
}

export default setupTags
