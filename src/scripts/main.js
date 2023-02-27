
console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { plantSeeds }   from "./tractor.js"
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'


const yearlyPlan =createPlan()



const plantedSeeds = plantSeeds(yearlyPlan)

const harvest = harvestPlants(plantedSeeds)
console.log(harvest)

const catalogOfFood=catalog(harvest)

const parentHTMLElement = document.querySelector(".food")


parentHTMLElement.innerHTML = catalog(harvest)