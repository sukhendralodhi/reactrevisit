async function githubInfoLoader() {
    const response = await fetch('https://api.github.com/users/sukhendralodhi')
    const data = await response.json()
    return data
}

export { githubInfoLoader }