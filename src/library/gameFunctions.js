import game from '@/data/game'



function countBlocks() {
    return Object.keys(game.game.blocks).length
}

function countLocus(blockNumber) {
    return Object.keys(game.game.blocks[blockNumber - 1].locuses).length
}

function countCards(blockNumber, locusNumber) {
    return Object.keys(game.game.blocks[blockNumber - 1].locuses[locusNumber - 1].cards).length
}

function blocksName(blockNumber) {
    return game.game.blocks[blockNumber - 1].name
}

function blockNotes(blockNumber) {
    return game.game.blocks[blockNumber - 1].notes
}

function answer (blockNumber, locusNumber, cardNumber){

    let locus = game.game.blocks[blockNumber - 1].locuses[locusNumber - 1]
    let card = game.game.blocks[blockNumber - 1].locuses[locusNumber - 1].cards[cardNumber - 1]
    
    let notes = card.takenotes

    let points = card.point
    locus.locus_points += points

    locus.locus_card_code = card.code
    locus.locus_card_name = card.name
    locus.locus_card_image1 = card.image1
    locus.locus_card_image2 = card.image2

        
    let answer = {}
    answer.points = points; 
    answer.notes = notes; 

    return answer
}

function totalScore(){

    let total = 0

    let blockCount = this.countBlocks() 
    // console.log(blockCount)

    for (let i = 1; i <=  blockCount; i++) { // выведет 0, затем 1, затем 2
            
        let locusCount = countLocus(i)

        for (let j = 1; j <=  locusCount; j++) { // выведет 0, затем 1, затем 2
            
                        locus_points: 0,
            total += game.game.blocks[i-1].locuses[j-1].locus_points
        
        }

    }

    return total
}


function getBlockInfo(blockNumber){

    let result = {}

    result.points = game.game.blocks[blockNumber - 1].name; 
    result.notes = game.game.blocks[blockNumber - 1].notes;

    return result
}


function getLocusInfo(blockNumber, locusNumber){

    let result = {}

    result.locus_name = game.game.blocks[blockNumber - 1].locuses[locusNumber - 1].locus_name
    result.locus_notes = game.game.blocks[blockNumber - 1].locuses[locusNumber - 1].locus_notes
    result.locus_category = game.game.blocks[blockNumber - 1].locuses[locusNumber - 1].locus_category
    result.locus_backimg = game.game.blocks[blockNumber - 1].locuses[locusNumber - 1].locus_backimg
    result.locus_card_code = game.game.blocks[blockNumber - 1].locuses[locusNumber - 1].locus_card_code
    result.locus_card_name = game.game.blocks[blockNumber - 1].locuses[locusNumber - 1].locus_card_name
    result.locus_card_image1 = game.game.blocks[blockNumber - 1].locuses[locusNumber - 1].locus_card_image1
    result.locus_card_image2 = game.game.blocks[blockNumber - 1].locuses[locusNumber - 1].locus_card_image2
    result.locus_points = game.game.blocks[blockNumber - 1].locuses[locusNumber - 1].locus_points
    result.locus_type = game.game.blocks[blockNumber - 1].locuses[locusNumber - 1].locus_type

    return result

}

function getLocusCards(blockNumber, locusNumber){
    return game.game.blocks[blockNumber - 1].locuses[locusNumber - 1].cards
}

function getLocusCard(blockNumber, locusNumber, cardNumber){
    return game.game.blocks[blockNumber - 1].locuses[locusNumber - 1].cards[cardNumber - 1]
}

function gameInfo(){

    let result = {}

        result.game_title = game.game.title.program_name;
        result.game_notes = game.game.title.notes; 
        result.author_name = game.game.author.name; 
        result.author_email = game.game.author.email; 
        result.game_tags = game.game.tags; 
        result.blocks_count = this.countBlocks();
        result.total_score = this.totalScore();

        // result.game_tags = game.game.tags; 
        // result.game_tags = game.game.tags; 

    return result

}

function getBlocks(){

    let result = []

    let blockCount = this.countBlocks() 

    for (let i = 1; i <=  blockCount; i++) {  
        
        result.push(this.getBlockInfo(i))
    }

    return result

}

function getLocuses(blockNumber){

    let result = []

    let locusCount = this.countLocus(blockNumber)

    for (let i = 1; i <=  locusCount; i++) {  
        
        result.push(this.getLocusInfo(blockNumber, i))
    }

    return result

}

function getCards(blockNumber, locusNumber){

    let result = []

    let cardCount = this.countCards(blockNumber, locusNumber)

    for (let i = 1; i <=  cardCount; i++) {  
        
        result.push(game.game.blocks[blockNumber - 1].locuses[locusNumber - 1].cards[i - 1])
    }

    return result

}


export {
            countBlocks, countLocus, countCards,
            blocksName, blockNotes,
            answer, totalScore,
            getBlockInfo, getLocusInfo,
            getLocusCards, getLocusCard, gameInfo,
            getBlocks, getLocuses, getCards 
        };