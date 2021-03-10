import { info } from "../data/info";
import { allocation } from "../data/allocation";
import { performance } from "../data/performance";
import { positions } from "../data/positions";
import { Allocation, Position } from "../data/models";

//a mocked service for API integration
export function getFundInfo(): any {
  return info;
}

export function getFundAllocation(): Allocation[] {
  return allocation;
}

export function getPerformance(): string[] {
  return performance;
}

export function getPositions(): Position[] {
  return positions;
}
