const API_BASE_URL = "https://localhost:7029";

// ==================== Interfaces ====================

export interface Faq {
  id: number;
  pertanyaan: string;
  jawaban: string;
}

export interface CreateFaqRequest {
  pertanyaan: string;
  jawaban: string;
}

export interface UpdateFaqRequest {
  id: number;
  pertanyaan: string;
  jawaban: string;
}

export interface CreateFaqResponse {
  id: number;
  message: string;
}

export interface MutationResponse {
  message: string;
}

// ==================== API Functions ====================

export async function getAllFaqs(): Promise<Faq[]> {
  const response = await fetch(`${API_BASE_URL}/api/FAQ`);

  if (!response.ok) {
    throw new Error(`Failed to fetch FAQs: ${response.status}`);
  }

  return response.json();
}

export async function createFaq(
  data: CreateFaqRequest,
  token: string,
): Promise<CreateFaqResponse> {
  const response = await fetch(`${API_BASE_URL}/api/FAQ`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(
      error?.message ?? `Failed to create FAQ: ${response.status}`,
    );
  }

  return response.json();
}

export async function updateFaq(
  id: number,
  data: UpdateFaqRequest,
  token: string,
): Promise<MutationResponse> {
  const response = await fetch(`${API_BASE_URL}/api/FAQ/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(
      error?.message ?? `Failed to update FAQ: ${response.status}`,
    );
  }

  return response.json();
}

export async function deleteFaq(
  id: number,
  token: string,
): Promise<MutationResponse> {
  const response = await fetch(`${API_BASE_URL}/api/FAQ/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(
      error?.message ?? `Failed to delete FAQ: ${response.status}`,
    );
  }

  return response.json();
}
