const API_BASE_URL = "https://localhost:7029";

// ==================== Interfaces ====================

export interface EventCategory {
  id: number;
  nama_Kategori: string;
}

export interface CreateEventCategoryRequest {
  nama_Kategori: string;
}

// ==================== API Functions ====================

export async function getAllEventCategories(): Promise<EventCategory[]> {
  const response = await fetch(`${API_BASE_URL}/api/KategoriKegiatan`);

  if (!response.ok) {
    throw new Error(`Failed to fetch event categories: ${response.status}`);
  }

  return response.json();
}

export async function createEventCategory(
  data: CreateEventCategoryRequest,
): Promise<EventCategory> {
  const response = await fetch(`${API_BASE_URL}/api/KategoriKegiatan`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(
      error?.message ?? `Failed to create event category: ${response.status}`,
    );
  }

  return response.json();
}
