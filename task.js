getMoney('https://www.nbrb.by/api/exrates/currencies')





async function getMoney(url){
    let MainUrl = await fetch(url)
    let content = await MainUrl.json()

   let q = []

   for(key of content){
      let a = new Date(key.Cur_DateStart).getTime()
      let b = new Date(key.Cur_DateEnd).getTime()
      q.push({a,b})
   }
   // console.log(q)




   // console.dir(newArr); 


   //  for(key of content){
   //    let name = key
   //    let option = document.createElement('option')
   //    let select = document.getElementById('select_value')
   //    option.append(name)
   //    select.append(option)
   //  }
}

let curID = 190
let startDate = '2016-6-1'
let endDate = '2016-6-30'

async function getMore(url){

   let MainUrl = await fetch(url)
   let content = await MainUrl.json()
   console.log(content)
}

getMore('https://www.nbrb.by/API/ExRates/Rates/Dynamics/'+ curID +'?startDate='+ startDate +'&endDate='+ endDate +'')
