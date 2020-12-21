type AvailableAnimal = 'Dog' | 'Squerrel' | 'bird' | 'pig' | 'cat' | 'giraffe' | 'lion' | 'tiger'



let SpriteFavoriteAnimal:AvailableAnimal
SpriteFavoriteAnimal = 'cat'

type HatedAnimalListForPor = 'bird' | 'pig' | 'lion' | 'giraffe'

type CustomAvailableAnimalForPor = Exclude<AvailableAnimal, HatedAnimalListForPor>

let PorFavoriteAnimal:CustomAvailableAnimalForPor
PorFavoriteAnimal='Dog'

export{}