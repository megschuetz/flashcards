const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');


describe('Round', () => {
    
    let deck;
    let round;
    let card1;
    let card2;
    let card3;
    
    beforeEach(() => {
        card1 = new Card (1, 'Where?', ['CO', 'NV', 'AZ'], 'CO')
        card2 = new Card (2, 'Where?', ['CO', 'NV', 'AZ'], 'NV')
        card3 = new Card (3, 'Where?', ['CO', 'NV', 'AZ'], 'AZ')
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck); 
    })


    it('should be a function', () => {
        expect(Round).to.be.a('function')
    });

    it('should be an instance of a deck', () => {
        expect(round).to.be.an.instanceOf(Round)
    });

    it('should check for deck', () => {
        expect(round.deck).to.deep.equal([card1, card2, card3])
    });

    it('should check first card', () => {
        expect(round.currentCard).to.equal(card1)
    });

    it('should return current card', () => {
        expect(round.returnCurrentCard()).to.be.a('object')
    });

    it('should start with zero turns', () => {
        expect(round.turns).to.equal(0)
    });

    it('should keep track of incorrect guess with ID', () => {
        expect(round.incorrectGuesses).to.be.a('array')
    })
})