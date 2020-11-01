interface CardCredential{
    code: string|null;
    role: 'normal' | 'super' 
}

function initializeCard(card: Partial<CardCredential>){
    if(!card.role){
        card.role = 'normal'
    }
}

initializeCard({code:'25ab'}) // role isn't quired , code also