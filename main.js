const tributeChest = []

const payTribute = (tributeId,message,queenId) => {
    // Create a tribute object
    const tributeObject= {
        id:tributeId,
        description:message,
        queenId:queenId

    }

    // Add the tribute object to the tribute chest
        tributeChest.push(tributeObject)
}

payTribute(100,"gold chest",1)
payTribute(100,"carribean island",1)
payTribute(100,"world's best chef",1)