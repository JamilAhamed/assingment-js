function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}

// finish kilometer to meter

function budgetCalculator(watch, phone, laptop){
    var total = (watch*50) + (phone*100) + (laptop*150);
    return total;
}

// finish budget calculator

function hotelCost(stayingDay){
    var rent = 0;
    if (stayingDay <= 10){
        rent = stayingDay * 100;
    }else if (stayingDay <= 20) {
        var fristTenDay = 10 *100;
        var remainingDay = stayingDay - 10;
        var secondTenDay = remainingDay *80;
        rent = fristTenDay + secondTenDay;
    } 
    else {
        var fristTenDay = 10 *100;
        var secondTenDay =10 *80;
        var remainingDay = stayingDay - 20;
        var thirdTenDay = remainingDay *50;
        rent = fristTenDay + secondTenDay + thirdTenDay;
    }
    return rent;
}

// finish hotel cost

function megaFriend(friendsName){
 var maxword = friendsName[0];
 for ( var i =0; i <friendsName.length; i++ ){
    var element = friendsName [i];
    if(element.length > maxword.length){
        maxword = element;  
    }
    }
    return maxword;
}

// finish mega friend


