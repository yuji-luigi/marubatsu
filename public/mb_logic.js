export const TILE_STATUSES = {
    MARU: 'maru',
    BATSU: 'batsu'
}

export function createBoard(boardSize) {
     const board = []
   for(let x = 0; x < boardSize; x++){
        const row = []
        for(let y = 0; y < boardSize; y++){
            const element = document.createElement('div')
            element.dataset.status =  setRandomState()
            

            const tile = {
                element,
                x,
                y,
                get status() {
                    return element.dataset.status
                },
                set status (value) {
                    tile.element.dataset.status = value
                },
            }
    

            row.push(tile)
        }
        board.push(row)
    }

    
    return board
}

export function tileClicked(board, tile) {
    const adjencentTiles = getNearByTiles(board, tile)
   adjencentTiles.forEach(t => {
       flipTile(t)
       
   })
    
}

function setRandomState (){
    const maru = [0, 2, 4, 6, 8, 9]
    const randomNumber = getRandomNumber()
    
    if(maru.some(n => n == randomNumber)){
        return TILE_STATUSES.MARU
    }else {
        return TILE_STATUSES.BATSU
    }

}

function getRandomNumber () {
     const number = (Math.floor(Math.random() * 10))
     return number
}

function getNearByTiles(board, {x, y}) {
    const tiles = []
    for( let xOffset = -1; xOffset <= 1; xOffset++){
        if (xOffset !== 0){
            const position = board[x + xOffset]?.[y]
            if(position){
                  tiles.push(position)   
            }
        }
        if (xOffset === 0){
            for(let yOffSet = -1; yOffSet <= 1; yOffSet++){
                const position = board[x + xOffset]?.[y + yOffSet]
                if(position){   
                    tiles.push(position)
                }
            }
        }
        
    }
    return tiles
}

function flipTile(tile) {
    if(tile.status ===TILE_STATUSES.BATSU){
        tile.status = TILE_STATUSES.MARU
        tile.element.textContent = '○'
    }else{
    if(tile.status === TILE_STATUSES.MARU){
        tile.status = TILE_STATUSES.BATSU
    tile.element.textContent = '×'
    }
    
}   
}