const { Room, Booking } = require('./index')

describe("Room tests",()=>{

    test('is occupied', () => {
        const book1 = new Booking('usuario1', 'usuario1@1.com', "2023-04-03","2023-04-15")
        const book2 = new Booking('usuario2', 'usuario2@2.com', "2023-01-02","2023-01-15")

        let occupiedRoom = new Room('Deluxe',[book1,book2],15000,10)
        expect(occupiedRoom.isOccuppied("2023-04-03")).toBeTruthy()
    });

    test('is NoOccupied', () => {
        const book1 = new Booking('usuario1', 'usuario1@1.com', "2023-04-03","2023-01-15")
        const book2 = new Booking('usuario2', 'usuario2@2.com', "2023-01-02","2023-01-15")
        let occupiedRoom1 = new Room('Deluxe',[book1,book2],15000,10)
        expect(occupiedRoom1.isOccuppied("2023-01-01")).toBeFalsy()
    });

});

describe("getFee tests",()=>{ 

    test("getFee, 20% discount", () => {
        const room1 = new Room("suite", [], 350, 15);
        const book1 = new Booking('usuario1', 'usuario1@1.com', "2023-04-03","2023-01-15",5, room1);
    
        room1.bookings = [book1];
    
        expect(book1.getFee()).toBe(280);
    });

    test("getFee, 0% discount", () => {
        const room1 = new Room("suite", [], 400, 0);
        const book1 = new Booking('usuario1', 'usuario1@1.com', "2023-04-03","2023-01-15",0, room1);
    
        room1.bookings = [book1];
    
        expect(book1.getFee()).toBe(400);
    });

    test("getFee, negative -10% discount", () => {
        const room1 = new Room("suite", [], 400, -5);
        const book1 = new Booking('usuario1', 'usuario1@1.com', "2023-04-03","2023-01-15", -5 , room1);
    
        room1.bookings = [book1];
    
        expect(book1.getFee()).toBe(400);
    });

});