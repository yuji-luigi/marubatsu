//UI 2021

import { createBoard, TILE_STATUSES, tileClicked} from './mb_logic.js'

const BOARD_ELEMENT = document.querySelector('.board')

const boardSize = 4



const board = createBoard(boardSize)
board.forEach(row => {
    row.forEach(tile => {
        BOARD_ELEMENT.append(tile.element)
        if (tile.status === TILE_STATUSES.MARU){
        console.log(tile.status)}

        putTextInTile(board, tile)
        tile.element.addEventListener('click', () => {
            tileClicked(board, tile)
            
        }
            
             )
        }
    )
       
})

function putTextInTile(board, tile){
    if(tile.status === TILE_STATUSES.MARU){
        tile.element.textContent = '○'
        
    }else{
        tile.element.textContent = '×'
    }
}

BOARD_ELEMENT.style.setProperty('--sizeColumn', boardSize)
BOARD_ELEMENT.style.setProperty('--sizeRow', boardSize )




//  1. populate the board

//  2. right click to change the surroundings
//  3. create variations cross or surrounds
//  4. check for win/lose