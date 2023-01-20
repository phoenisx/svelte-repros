export const load = async () => {
  return {
    random: new Promise((res) => setTimeout(() => {
      res({
        id: "123",
        name: "foo"
      })
    }, 1000))
  }
}
