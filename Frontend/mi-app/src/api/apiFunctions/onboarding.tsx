import type { OnboardingData } from "../../types/OnboardingData";
import api from "../axios"

export const isComplete = (id: number) =>
  api.post("/onboarding/isComplete", { id });


export const updateOnboarding = async (data: OnboardingData) => {
  const token = localStorage.getItem("token");

  const response = await api.post(
    "/onboarding/update",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};