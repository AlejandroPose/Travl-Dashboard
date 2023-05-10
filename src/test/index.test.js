import '@testing-library/jest-dom';
const { render, cleanup, screen } = require('@testing-library/react');
const { Room, Booking } = require('./index');
const { ButtonEditProfile } = require('../styles/sideBar.style');

const bookingsTest = [
    {
      name: "A a",
      email: "krothschild0@360.cn",
      checkIn: "2023-04-19",
      checkOut: "2023-04-22",
      discount: 15,
      room: {
        name: "AFR 170",
        bookings: [],
        rate: 500,
        discount: 15,
      },
    },
    {
      name: "B b",
      email: "krothschild0@360.cn",
      checkIn: "2023-04-20",
      checkOut: "2023-04-30",
      discount: 0,
      room: {
        name: "AFR 250",
        bookings: [],
        rate: 500,
        discount: 0,
      },
    },
    {
      name: "C c",
      email: "krothschild0@360.cn",
      checkIn: "2023-04-15",
      checkOut: "2023-04-17",
      discount: 5,
      room: {
        name: "AFR 380",
        bookings: [],
        rate: 500,
        discount: 5,
      },
    },
  ];

describe("isOcuppied method of room object", () => {
  test("Returns true when the room is booked", () => {
    const room = new Room("AFR 170", bookingsTest, 500, 0);
    expect(room.isOcuppied("2023-04-20")).toBe(true);
  });
  test("Returns false when the room is not booked", () => {
    const room = new Room("AFR 170", bookingsTest, 500, 0);
    expect(room.isOcuppied("2023-04-25")).toBe(false);
  });
});
  
describe("ocuppancyPercentage method of room object", () => {
  test("Returns 100% when it recive one day range and is occupied", () => {
    const room = new Room("AFR 170", bookingsTest, 500, 0);
    expect(room.occupancyPercentage("2023-04-20", "2023-04-20")).toBe(100);
  });
  test("Returns 100% when the room it's occupied for the whole range", () => {
    const room = new Room("AFR 170", bookingsTest, 500, 0);
    expect(room.occupancyPercentage("2023-04-19", "2023-04-21")).toBe(100);
  });
  test("Returns 75% when the room is occupied 3 days in a range of 4 days", () => {
    const room = new Room("AFR 170", bookingsTest, 500, 0);
    expect(room.occupancyPercentage("2023-04-18", "2023-04-21")).toBe(75);
  });
  test("Returns 0% when the room is available for the whole date range", () => {
    const room = new Room("AFR 170", bookingsTest, 500, 0);
    expect(room.occupancyPercentage("2023-04-10", "2023-04-15")).toBe(0);
  });
  test("Returns 0% when the room doesn't appear in any booking", () => {
    const room = new Room("AFR 270", bookingsTest, 500, 0);
    expect(room.occupancyPercentage("2023-04-20", "2023-04-22")).toBe(0);
  });
});
  
describe("totalOccupancyPercentage static method of Room class", () => {
  test("Returns 100% when all rooms passed have 100% of occupancy", () => {
    const room1 = new Room("AFR 170", bookingsTest, 500, 0);
    const room2 = new Room("AFR 250", bookingsTest, 500, 0);
    expect(
      Room.totalOccupancyPercentage([room1, room2], "2023-04-20", "2023-04-22")
    ).toBe(100);
  });
  test("Returns 50% when one room has 100% and the other 0% of occupancy", () => {
    const room1 = new Room("AFR 170", bookingsTest, 500, 0);
    const room2 = new Room("AFR 250", bookingsTest, 500, 0);
    expect(
      Room.totalOccupancyPercentage([room1, room2], "2023-04-23", "2023-04-28")
    ).toBe(50);
  });
  test("Returns 0% when all rooms passed have 0% of occupancy", () => {
    const room1 = new Room("AFR 170", bookingsTest, 500, 0);
    const room2 = new Room("AFR 250", bookingsTest, 500, 0);
    expect(
      Room.totalOccupancyPercentage([room1, room2], "2023-04-10", "2023-04-18")
    ).toBe(0);
  });
  test("Returns 33% when one room has 100%, and the two rooms left have 0% of occupancy", () => {
    const room1 = new Room("AFR 170", bookingsTest, 500, 0);
    const room2 = new Room("AFR 250", bookingsTest, 500, 0);
    const room3 = new Room("AFR 380", bookingsTest, 500, 0);
    expect(
      Room.totalOccupancyPercentage(
        [room1, room2, room3],
        "2023-04-15",
        "2023-04-17"
      )
    ).toBe(33);
  });
});

describe("availableRooms static method of Room class", () => {
  test("return all rooms from the passed array if their occupancy is 0%", () => {
    const room1 = new Room("AFR 170", bookingsTest, 500, 0);
    const room2 = new Room("AFR 250", bookingsTest, 500, 0);
    const room3 = new Room("AFR 380", bookingsTest, 500, 0);
    expect(
      Room.availableRooms([room1, room2, room3], "2023-04-05", "2023-04-08")
    ).toEqual([room1, room2, room3]);
  });
  test("return one room from the passed array if his occupancy is 0% and more than 0% for the others", () => {
    const room1 = new Room("AFR 170", bookingsTest, 500, 0);
    const room2 = new Room("AFR 250", bookingsTest, 500, 0);
    const room3 = new Room("AFR 380", bookingsTest, 500, 0);
    expect(
      Room.availableRooms([room1, room2, room3], "2023-04-15", "2023-04-19")
    ).toEqual([room2]);
  });
  test("return an empty array if the occupancy for all rooms in more than 0%", () => {
    const room1 = new Room("AFR 170", bookingsTest, 500, 0);
    const room2 = new Room("AFR 250", bookingsTest, 500, 0);
    expect(
      Room.availableRooms([room1, room2], "2023-04-20", "2023-04-22")
    ).toEqual([]);
  });
  test("return the full passed array if no one room is in the booking list", () => {
    const room1 = new Room("AFR 420", bookingsTest, 500, 0);
    const room2 = new Room("AFR 160", bookingsTest, 500, 0);
    expect(
      Room.availableRooms([room1, room2], "2023-04-19", "2023-04-23")
    ).toEqual([room1, room2]);
  });
});

describe("getFee method of booking objects", () => {
  test("Returns 1000 when the room rate is 200 for five days and without discounts", () => {
    const room = new Room("AMR 023", bookingsTest, 200);
    const booking = new Booking(
      "Jean Doe",
      "JDoe@mail.com",
      "2023-04-23",
      "2023-04-28",
      0,
      room
    );
    expect(booking.getFee()).toBe(1000);
  });
  test("Returns 900 when the room rate is 200, its discount 0, for a five day reservation with a discount of 10%", () => {
    const room = new Room("AMR 023", bookingsTest, 200);
    const booking = new Booking(
      "Jean Doe",
      "JDoe@mail.com",
      "2023-04-23",
      "2023-04-28",
      10,
      room
    );
    expect(booking.getFee()).toBe(900);
  });
});

describe("styled button get by props background color", () => {
  afterEach(cleanup);
  test("positive case of button getting the background color from props", () => {
    render ( <ButtonEditProfile backgroundColor='#dddddd' data-testid='test-button' /> );
    expect( screen.getByTestId('test-button') ).toHaveStyle( `background-color: #dddddd` );
  });
});