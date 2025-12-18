import { SwapRate, GeminiAnalysis, Invoice } from "../types";

export const getTreasuryAnalysis = async (rate: SwapRate): Promise<GeminiAnalysis> => {
  // Mock response without Google API
  return {
    recommendation: "Hold Current Position",
    riskAssessment: "Market conditions stable with moderate spread widening.",
    actionItem: "Monitor SONIA rate changes closely."
  };
};

export const getUnderwritingInsight = async (invoice: Invoice): Promise<string> => {
  // Mock response without Google API
  return "Invoice appears low-risk based on verified integrity checks.";
};

export const getCommodityAnalysis = async (commodityName: string): Promise<string> => {
  // Mock response without Google API
  return "No significant supply chain disruptions reported for " + commodityName + ".";
};
