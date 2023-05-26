import { faker } from "@faker-js/faker";

export type Person = {
  N: string;
  SHIPMENT_NO: string;
  TRACKING_NO: string;
  CARGO_TYPE: string;
  CONSOL_TYPE: string;
  BOOKING_THRU: string;
  SHIPPER: string;
  CONSIGNEE: string;
  CUSTOMER_REMARK: string;
  BRANCH: string;
  LOADING_PORT: string;
  DISCHARGE_PORT: string;
  HAWB_NO: string;
  HAWB_DATE: Date;
  AWB_NO: string;
  AIRLINE: string;
  FLIGHT_NO: number;
  GOOD_DESC: string;
  TOTAL_PACKAGES: number;
  UNIT_CHARGEABLE_WT: number;
  UNIT: number;
  STATUS: "YES" | "NO";
  ETD: number;
  ESTIMATED_REVENUE: string;
  ESTIMATED_COST: string;
  ESTIMATED_PROFIT: string;
};

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Person => {
  return {
    N: faker.company.name(),
    SHIPMENT_NO: faker.company.name(),
    TRACKING_NO: faker.company.name(),
    CARGO_TYPE: faker.company.name(),
    CONSOL_TYPE: faker.company.name(),
    BOOKING_THRU: faker.company.name(),
    SHIPPER: faker.company.name(),
    CONSIGNEE: faker.company.name(),
    CUSTOMER_REMARK: faker.company.name(),
    BRANCH: faker.company.name(),
    LOADING_PORT: faker.company.name(),
    DISCHARGE_PORT: faker.company.name(),
    HAWB_NO: faker.company.name(),
    HAWB_DATE: faker.date.birthdate(),
    AWB_NO: faker.company.name(),
    AIRLINE: faker.company.name(),
    FLIGHT_NO: faker.datatype.number(40),
    GOOD_DESC: faker.company.name(),
    TOTAL_PACKAGES: faker.datatype.number(40),
    UNIT_CHARGEABLE_WT: faker.datatype.number(40),
    UNIT: faker.datatype.number(40),
    STATUS: faker.helpers.shuffle<Person["STATUS"]>(["YES", "NO"])[0]!,
    ETD: faker.datatype.number(40),
    ESTIMATED_REVENUE: faker.company.name(),
    ESTIMATED_COST: faker.company.name(),
    ESTIMATED_PROFIT: faker.company.name(),
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
      };
    });
  };

  return makeDataLevel();
}
