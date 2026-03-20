const API_BASE_URL = "https://localhost:7029";

// ==================== Interfaces ====================

export interface Lecturer {
  id: number;
  nama_Lengkap: string;
  bidang_Keahlian: string;
  pendidikan_Terakhir: string;
}

export interface CreateLecturerRequest {
  namaLengkap: string;
  bidangKeahlian: string;
  pendidikanTerakhir: string;
}

export interface CreateLecturerResponse {
  id: number;
  message: string;
}

// ==================== API Functions ====================

export async function getAllLecturers(): Promise<Lecturer[]> {
  const response = await fetch(`${API_BASE_URL}/api/Dosen`);

  if (!response.ok) {
    throw new Error(`Failed to fetch lecturers: ${response.status}`);
  }

  return response.json();
}

export async function createLecturer(
  data: CreateLecturerRequest,
  token: string,
): Promise<CreateLecturerResponse> {
  const response = await fetch(`${API_BASE_URL}/api/Dosen`, {
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
      error?.message ?? `Failed to create lecturer: ${response.status}`,
    );
  }

  return response.json();
}
