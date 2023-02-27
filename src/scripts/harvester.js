const newHarvest = []

export const harvestPlants = (plants) => {
        for (let plant of plants){
            if(plant.type === 'Corn') {
                for (let i = 0; i < plant.output / 2; i++) {
            
                    newHarvest.push(plant)

            }
          } else {
            for (let i = 0; i < plant.output; i++) {
            
               newHarvest.push(plant)
            }
        }
    }
    return newHarvest
}