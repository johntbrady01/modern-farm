

import { addPlant, usePlants } from "./field.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"


export const plantSeeds = (plan) => {
       for(const row of plan) {
        
        for(const seed of row) {
        if(seed==='Asparagus') {

            const asparagus = createAsparagus()
            addPlant(asparagus)
           
        }
        else if(seed==='Corn'){

            const corn = createCorn()
            addPlant(corn)
            
        }
        else if(seed==='Potato'){

            const potato = createPotato()
            addPlant(potato)
            
        }
        else if(seed==='Soybean'){

            const soybean = createSoybean()
            addPlant(soybean)
            
        }
        else if(seed==='Sunflower'){

            const sunflower = createSunflower()
            addPlant(sunflower)
          
        }
        else if(seed==='Wheat'){

            const wheat = createWheat()
            addPlant(wheat)
           
        }


       }
}
return usePlants()
}
