
export const catalog = (harvestedFood) => {

        const foods=harvestedFood

        let htmlString = '<article class="plant">'

         for(const food of foods) {

            htmlString += `<section class="words"> 
         
            ${food.type}
        
             </section>`

         }

         htmlString += `</article>`

         return htmlString

}