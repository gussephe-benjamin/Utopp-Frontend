import { useNavigate } from "react-router-dom"
import type { JSX } from "react"
import { updateOnboarding } from "../api/apiFunctions/onboarding";
import type { OnboardingData } from "../types/OnboardingData";

export default function FinishOnboarding({ data }: { data: OnboardingData }): JSX.Element {
  const navigate = useNavigate()

const handleFinish = async () => {
  try {
    console.log("DATA", data);

    const res = await updateOnboarding(data);
    console.log("RESPONSE:", res);

    if (res.ok !== true) {
      throw new Error("Error al completar onboarding 1");
    }

    navigate("/dashboard", { replace: true });

  } catch (error) {
    console.error("ERROR REAL:", error);
    alert("Error al completar onboarding 2");
  }
};

  return (
    <div>
      <h1>¡Onboarding Completado!</h1>
      <button onClick={handleFinish}>
        Ir al Dashboard
      </button>
    </div>
  )
}


