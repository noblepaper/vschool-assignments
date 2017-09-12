var waterBottle = {
    color: "green",
    liquidIn: {
        water: true,
        lemonade: false,
        gatorade: false
    },
    percentFull: 90,
    isFull: function() {
        if (this.percentFull > 75) {
            return true;
        } else {
            return false;
        }
    }
};

var onNightStand = {
    pens: 2,
    lipBalm: true,
    waterBottle: true,
    lampOnOrOff: ["off", "on"],
    clock: function() {
        var monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var date = new Date();
        var day = date.getDate();
        var month = monthsArray[date.getMonth + 1];
        var year = date.getFullYear();
        
        return month + " " + day + ", " + year;
    }
};

var candyStars = {
    colors: ["pink", "dark pink", "orange", "purple"],
    areYummy: true,
    whileEating: function() {
        this.areYummy = true;
    }
};

var schoolBag = {
    laptop: false,
    lunch: false,
    keys: false,
    isHeavy: function() {
        if (this.laptop === true && this.keys === true && this.lunch === true) {
            return true;
        } else {
            return false;
        }
    },
    isFull: {
        if (this.isHeavy === true) {
            return true;
        } else {
            return false;
        }
    }
};

