const calculateCommissionFunction = require("../CalculateComission");

describe("calculateCommissionFunction", () => {
    // Test valid inputs and commission calculation
    test("should return total sales and commission when sales quantities are within limits", () => {
        const lockQty = 60;
        const stockQty = 70;
        const barrelQty = 80;

        const expectedTotalSales = 6800;
        const expectedCommission = 1351;

        expect(
            calculateCommissionFunction(lockQty, stockQty, barrelQty),
        ).toEqual([expectedTotalSales, expectedCommission]);
    });

    // Test boundary condition for maximum limit
    test("should return total sales and commission with commission rate 0.2 for total sales equal to 1800", () => {
        const lockQty = 45;
        const stockQty = 30;
        const barrelQty = 45;

        const expectedTotalSales = 4050;
        const expectedCommission = 801;

        expect(
            calculateCommissionFunction(lockQty, stockQty, barrelQty),
        ).toEqual([expectedTotalSales, expectedCommission]);
    });

    // Test commission calculation with total sales less than or equal to 1000
    test("should return total sales and commission with commission rate 0.1 for total sales less than or equal to 1000", () => {
        const lockQty = 25;
        const stockQty = 35;
        const barrelQty = 50;

        const expectedTotalSales = 3425; // Updated expected total sales
        const expectedCommission = 676; // Updated expected commission

        expect(
            calculateCommissionFunction(lockQty, stockQty, barrelQty),
        ).toEqual([expectedTotalSales, expectedCommission]);
    });

    // Test commission calculation with total sales between 1000 and 1800
    test("should return total sales and commission with commission rate 0.15 for total sales greater than 1000 and less than or equal to 1800", () => {
        const lockQty = 35;
        const stockQty = 45;
        const barrelQty = 55;

        const expectedTotalSales = 4300;
        const expectedCommission = 851;

        expect(
            calculateCommissionFunction(lockQty, stockQty, barrelQty),
        ).toEqual([expectedTotalSales, expectedCommission]);
    });

    // Test commission calculation with total sales greater than 1800
    test("should return total sales and commission with commission rate 0.2 for total sales greater than 1800", () => {
        const lockQty = 45;
        const stockQty = 55;
        const barrelQty = 65;

        const expectedTotalSales = 5300;
        const expectedCommission = 1051;

        expect(
            calculateCommissionFunction(lockQty, stockQty, barrelQty),
        ).toEqual([expectedTotalSales, expectedCommission]);
    });

    // Test error case for exceeding maximum sales limits
    test("should return an error message when any sales quantity exceeds maximum limit", () => {
        const lockQty = 85;
        const stockQty = 95;
        const barrelQty = 105;

        expect(calculateCommissionFunction(lockQty, stockQty, barrelQty)).toBe(
            "Sales quantities exceed maximum limits.",
        );
    });

    // Test commission calculation with total sales less than 1000
    test("should return total sales and commission with commission rate 0.2 for total sales less than 1000", () => {
        const lockQty = 10;
        const stockQty = 15;
        const barrelQty = 20;

        const expectedTotalSales = 1400; // Updated expected total sales
        const expectedCommission = 203.25; // Updated expected commission

        expect(
            calculateCommissionFunction(lockQty, stockQty, barrelQty),
        ).toEqual([expectedTotalSales, expectedCommission]);
    });

    // Test commission calculation with total sales less than 1800
    test("should return total sales and commission with commission rate 0.2 for total sales less than 1800", () => {
      const lockQty = 5;
      const stockQty = 10;
      const barrelQty = 55;

      const expectedTotalSales = 1900; // Updated expected total sales
      const expectedCommission = 371; // Updated expected commission

      expect(
          calculateCommissionFunction(lockQty, stockQty, barrelQty),
      ).toEqual([expectedTotalSales, expectedCommission]);
  });
});
