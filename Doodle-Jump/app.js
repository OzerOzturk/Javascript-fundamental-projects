document.addEventListener('DOMContentLoaded', () =>{
    const grid =document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 150
    let isGameOver = false
    let platformCount = 5
    let platforms = []

    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = doodlerLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'

    }

    class Platform {
        constructor (newPlatBottom){
            this.bottom = newPlatBottom
            this.left = Math.random() * 315
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)
        }
    }

    function createPlatforms(){
        for (let i=0; i<platformCount; i++){
            let platGap = 600 / platformCount 
            let newPlatBottom = 100 + i * platGap
            let newPlatform = new Platform (newPlatBottom)
            platforms.push(newPlatform)
            console.log(platforms);
        }
    }



    function start(){
        if(!isGameOver) {
            createDoodler()
            createPlatforms()
        }
    }
    //attach t o button 
    start()

    
} )