type AvailableAnimal = 'Dog' | 'Squerrel' | 'bird' | 'pig' | 'cat' | 'giraffe' | 'lion' | 'tiger'

type MyFavList = 'Dog' | 'Frog' | 'Spider'

type CustomAvailableAnimalThatAlsoIncludedInMyFavList = Extract<AvailableAnimal, MyFavList>
let favAnimal: CustomAvailableAnimalThatAlsoIncludedInMyFavList
favAnimal ='Dog'
export{}