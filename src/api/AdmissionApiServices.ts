const API_BASE_URL = "https://localhost:7029";

// ==================== Interfaces ====================

export interface CreateAdmissionRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  statementOfFaith: string;
  churchAffiliation: string;
}

export interface CreateAdmissionResponse {
  id: number;
  message: string;
}

// ==================== API Functions ====================

export async function applyAdmission(
  data: CreateAdmissionRequest,
): Promise<CreateAdmissionResponse> {
  const response = await fetch(`${API_BASE_URL}/api/Admissions/apply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(
      error?.message ?? `Failed to submit admission: ${response.status}`,
    );
  }

  return response.json();
}
