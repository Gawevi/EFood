class Restaurants {
  title: string
  nota: number
  description: string
  image: string
  tags: string[]
  id: number

  constructor(
    title: string,
    nota: number,
    description: string,
    image: string,
    tags: string[],
    id: number
  ) {
    this.title = title
    this.nota = nota
    this.description = description
    this.image = image
    this.tags = tags
    this.id = id
  }
}

export default Restaurants
