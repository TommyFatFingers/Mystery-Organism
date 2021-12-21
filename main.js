// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//factory Function
function pAequorFactory(number,array){
  return {specimenNum: number,
          dna: array,
          mutate(){
            let rNumber = Math.floor(Math.random() * 15)
            let select = this.dna[rNumber]
            let newBase = returnRandBase()
            while(select===newBase){
              newBase = returnRandBase()
            }
           return this.dna.splice(rNumber, 1, newBase)
          },
          compareDNA(pAequorObj){
            let count = 0
            
            for(let i = 0; i< pAequorObj.dna.length; i++){
              if(pAequorObj.dna[i]===this.dna[i]){
                count++
              } 
             }
             let perc = count/15*100
             
            return `${pAequorObj.specimenNum} has a match of ${perc.toFixed(2)}% with ${this.specimenNum}`
              
            },
            willLikelySurvive(){
              let count = 0
              for(let i = 0; i< this.dna.length; i++){
                if(this.dna[i]==='C'||this.dna[i]==='G'){
                  count ++
                }
              }
              console.log(count/15*100)
              return count/15*100>=60 ? true : false
            }
          }
        }




const myFirstSpecimen = pAequorFactory(1,['A','T','C','G','A','T','C','G','A','T','C','G','A','T','C']);
const mySecondSpecimen = pAequorFactory(2,['A','T','C','G','A','T','C','G','A','T','C','A','T','C','G']);
myFirstSpecimen.mutate()

let live = []

function untilTheyLive(specimen){
  while(specimen.willLikelySurvive()===false){
    specimen.mutate()
  } if(specimen.willLikelySurvive()===true){
    live.push(specimen)
  }
}

function fillUpArray(){
  for(let i = 1; i<= 30; i++){
    untilTheyLive(pAequorFactory(i,mockUpStrand()))

  }
}
  fillUpArray()
console.log(live)

//nice. think that took me 1.5 hours

