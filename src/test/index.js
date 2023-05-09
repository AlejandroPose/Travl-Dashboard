class Room {

    constructor(name, bookings, rate, discount) {
      this.name = name;
      this.bookings = bookings;
      this.rate = rate;
      this.discount = discount = 0;
    };

    isOcuppied(date) {
      const formatDate = new Date(date).getTime();
      const roomInBooking = this.bookings.filter(
        (book) => book.room.name === this.name
      );
      let ocuppied = false;
      let formatCheckIn;
      let formatCheckOut;
      for (let i = 0; i < roomInBooking.length; i++) {
        formatCheckIn = new Date(roomInBooking[i].checkIn).getTime();
        formatCheckOut = new Date(roomInBooking[i].checkOut).getTime();
        if (formatDate >= formatCheckIn && formatDate <= formatCheckOut) {
          ocuppied = true;
        }
      }
      return ocuppied;
    };

    occupancyPercentage(startDate, endDate) {
      const formatStartDate = new Date(startDate).getTime();
      const formatEndDate = new Date(endDate).getTime();
      const step = 24 * 3600 * 1000;
      let mult = 0;
      const occupied = [];
      do {
        occupied.push(this.isOcuppied(formatStartDate + mult * step));
        mult++;
      } while (formatStartDate + step * mult <= formatEndDate);
      const totalOccupied = occupied.filter((item) => item).length;
      const total = occupied.length;
      return Math.round((totalOccupied / total) * 100);
    };

    static totalOccupancyPercentage(rooms, startDate, endDate) {
      const occupancyArr = rooms.map((room) =>
        room.occupancyPercentage(startDate, endDate)
      );
      const totalPercentage = occupancyArr.reduce((acum, act) => acum + act, 0);
      return Math.round(totalPercentage / occupancyArr.length);
    };

    static availableRooms(rooms, startDate, endDate) {
      const availableRooms = rooms.filter(
        (room) => room.occupancyPercentage(startDate, endDate) === 0
      );
      return availableRooms;
    };

  };
  
  class Booking {
    constructor(name, email, checkIn, checkOut, discount, room) {
      this.name = name;
      this.email = email;
      this.checkIn = checkIn;
      this.checkOut = checkOut;
      this.discount = discount;
      this.room = room;
    };

    getFee() {
      const formatCheckIn = new Date(this.checkIn).getTime();
      const formatCheckOut = new Date(this.checkOut).getTime();
      const totalDays = (formatCheckOut - formatCheckIn) / (24 * 3600 * 1000);
      const roomDailyPrice = this.room.rate * (1 - this.room.discount / 100);
      const totalFee = roomDailyPrice * totalDays * (1 - this.discount / 100);
      return totalFee;
    };

  };
  
  module.exports = { Room, Booking };