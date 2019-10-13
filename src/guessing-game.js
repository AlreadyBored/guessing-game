class GuessingGame {
    constructor() {
        this._min = null;
        this._max = null;

        this._currGuess = null;
    }

    setRange(min, max) {
        this._min = min;
        this._max = max;
    }

    guess() {
        this._currGuess = Math.round((this._min + this._max) / 2);
        return this._currGuess;
    }

    lower() {
        this._max = this._currGuess;
    }

    greater() {
        this._min = this._currGuess;
    }
}

module.exports = GuessingGame;
