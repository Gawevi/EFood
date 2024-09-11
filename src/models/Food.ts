class Food {
  title: string
  image: string
  description: string
  id: number

  constructor(title: string, image: string, description: string, id: number) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title
  }
}

export default Food
