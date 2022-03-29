function ViewModel() {
    this.firtsNumber = ko.observable(1);
    this.lastNumber = ko.observable(2);
    this.choice = ko.observable('somar');
    this.result = ko.computed(function () {
        var number1 = Number(this.firtsNumber());
        var number2 = Number(this.lastNumber());
        var text = '';
        const chosen = this.choice();
        if ('somar' === chosen)
            text = somar(number1, number2);
        if ('subtrair' === chosen)
            text = subtrair(number1, number2);
        if ('dividir' === chosen)
            text = dividir(number1, number2);
        if ('multiplicar' === chosen)
            text = multiplicar(number1, number2);
        return text;
    }, this);
}

function somar(x, y) {
    return (x + y);
}

function subtrair(x, y) {
    return (x - y);
}

function dividir(x, y) {
    return (x / y);
}

function multiplicar(x, y) {
    return (x * y);
}

/*
var ViewModel = function(first, last) {
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);
 
    this.fullName = ko.pureComputed(function() {
        // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        return this.firstName() + " " + this.lastName();
    }, this);
};
*/
/*
function AppViewModel() {
    this.firstName = ko.observable();
    this.lastName = ko.observable();
    this.fullName = ko.computed(function () {
        return this.firstName() + " " + this.lastName();
    }, this);
}
*/

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    /*
    ko.applyBindings(new ViewModel("Planet", "Earth")); // This makes Knockout get to work
    
    //ko.applyBindings(AppViewModel());
    */
    window.numberViewModel = new ViewModel();
    ko.applyBindings(window.numberViewModel);

});

