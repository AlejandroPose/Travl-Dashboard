class Room {
    constructor(name,bookings,rate,discount){
            this.name = name;
            this.bookings = bookings;
            this.rate = rate;
            this.discount = discount;
    };
      isOccuppied(date){
        let status = false;
        this.bookings.forEach(item => {
            if ( date >= item.checkIn && date <= item.checkOut ){
               status = true;
            }
            status = status;
        })
        return status;
    }
    occupancyPercentage(startDate, endDate){

    }

    static totalOccupancyPercentage(rooms, startDate, endDate) {}
    static availableRooms(rooms, startDate, endDate){}
}


class Booking{
    constructor(name,email,checkIn,checkOut,discount,room){
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.discount = discount;
        this.room = room;
    }
    getFee(){
        const discountTotal = this.discount + this.room.discount;
        let priceTotal = this.room.rate;
        if ( discountTotal > 0 && discountTotal < 100 ) {
            priceTotal = this.room.rate - (( discountTotal * this.room.rate ) / 100);
        }
          return Math.round(priceTotal);
        }
};

module.exports = { Room, Booking }