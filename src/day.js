class day 
{
    constructor(date, temp, feelsLike, desc) 
    {
        this.date = date;
        this.temp = temp;
        this.feelsLike = feelsLike;
        this.desc = desc;
    }

    set date(value) {
        this._date = value;
    }
    
    get date() {
        return this._date;
    }

    set temp(value) {
        this._temp = value;
    }
    
    get temp() {
        return this._temp;
    }

    set feelsLike(value) {
        this._feelsLike = value;
    }
    
    get feelsLike() {
        return this._feelsLike;
    }

    set desc(value) {
        this._desc = value;
    }
    
    get desc() {
        return this._desc;
    }
    
}

export default day;