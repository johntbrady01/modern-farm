 let plantsInField = []

  export const addPlant = (seed) => {
   
     if(Array.isArray(seed)){
          for(const individualCorn of seed){
          plantsInField.push(individualCorn)
          }
      }
     
     else{
     plantsInField.push(seed)
     }
 }

  export const usePlants = () => {
      return plantsInField

 }


