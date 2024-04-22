const calculateCommissionFunction = require("../CalculateComission");

describe("calculateCommissionFunction", () => {
    // Test valid inputs and commission calculation
    test("should return total sales and commission when sales quantities are within limits", () => {
        const lockQty = 50;
        const stockQty = 60;
        const barrelQty = 70;

        const expectedTotalSales = 5800;
        const expectedCommission = 1151;

        expect(
            calculateCommissionFunction(lockQty, stockQty, barrelQty),
        ).toEqual([expectedTotalSales, expectedCommission]);
    });

    // Test boundary condition for maximum limit
    test("should return total sales and commission with commission rate 0.2 for total sales equal to 1800", () => {
        const lockQty = 40;
        const stockQty = 25;
        const barrelQty = 40;

        const expectedTotalSales = 3550;
        const expectedCommission = 701;

        expect(
            calculateCommissionFunction(lockQty, stockQty, barrelQty),
        ).toEqual([expectedTotalSales, expectedCommission]);
    });

    // Test commission calculation with total sales less than or equal to 1000
    test("should return total sales and commission with commission rate 0.1 for total sales less than or equal to 1000", () => {
        const lockQty = 20;
        const stockQty = 30;
        const barrelQty = 40;

        const expectedTotalSales = 2800;
        const expectedCommission = 551;

        expect(
            calculateCommissionFunction(lockQty, stockQty, barrelQty),
        ).toEqual([expectedTotalSales, expectedCommission]);
    });

    // Test commission calculation with total sales between 1000 and 1800
    test("should return total sales and commission with commission rate 0.15 for total sales greater than 1000 and less than or equal to 1800", () => {
        const lockQty = 30;
        const stockQty = 40;
        const barrelQty = 50;

        const expectedTotalSales = 3800;
        const expectedCommission = 751;

        expect(
            calculateCommissionFunction(lockQty, stockQty, barrelQty),
        ).toEqual([expectedTotalSales, expectedCommission]);
    });

    // Test commission calculation with total sales greater than 1800
    test("should return total sales and commission with commission rate 0.2 for total sales greater than 1800", () => {
        const lockQty = 40;
        const stockQty = 50;
        const barrelQty = 60;

        const expectedTotalSales = 4800;
        const expectedCommission = 951;

        expect(
            calculateCommissionFunction(lockQty, stockQty, barrelQty),
        ).toEqual([expectedTotalSales, expectedCommission]);
    });

    // Test error case for exceeding maximum sales limits
    test("should return an error message when any sales quantity exceeds maximum limit", () => {
        const lockQty = 80;
        const stockQty = 90;
        const barrelQty = 100;

        expect(calculateCommissionFunction(lockQty, stockQty, barrelQty)).toBe(
            "Sales quantities exceed maximum limits.",
        );
    });

    // Test commission calculation with total sales less than 1000
    test("should return total sales and commission with commission rate 0.2 for total sales less than 1000", () => {
        const lockQty = 7;
        const stockQty = 12;
        const barrelQty = 5;

        const expectedTotalSales = 800;
        const expectedCommission = 75.5;

        expect(
            calculateCommissionFunction(lockQty, stockQty, barrelQty),
        ).toEqual([expectedTotalSales, expectedCommission]);
    });

    // Test commission calculation with total sales less than 1800
    test("should return total sales and commission with commission rate 0.2 for total sales less than 1800", () => {
      const lockQty = 7;
      const stockQty = 11;
      const barrelQty = 45;

      const expectedTotalSales = 1770;
      const expectedCommission = 258.75;

      expect(
          calculateCommissionFunction(lockQty, stockQty, barrelQty),
      ).toEqual([expectedTotalSales, expectedCommission]);
  });
});
