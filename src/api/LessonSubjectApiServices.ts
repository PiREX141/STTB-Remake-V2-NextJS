const API_BASE_URL = "https://localhost:7029";

// ==================== Interfaces ====================

export interface ProgramStudi {
  id: number;
  tingkat: string;
  nama_Prodi: string;
}

export interface LessonSubject {
  id: number;
  nama_Mk: string;
  kategori_Mk: string;
  detail_Perincian: string;
  prodi_Id: number;
  program_Studi: ProgramStudi | null;
}

export interface CreateLessonSubjectRequest {
  namaMk: string;
  kategoriMk: string;
  detailPerincian: string;
  prodiId: number;
}

export interface CreateLessonSubjectResponse {
  id: number;
  message: string;
}

// ==================== API Functions ====================

export async function getAllLessonSubjects(): Promise<LessonSubject[]> {
  const response = await fetch(`${API_BASE_URL}/api/MataKuliah`);

  if (!response.ok) {
    throw new Error(`Failed to fetch lesson subjects: ${response.status}`);
  }

  return response.json();
}

export async function createLessonSubject(
  data: CreateLessonSubjectRequest,
  token: string,
): Promise<CreateLessonSubjectResponse> {
  const response = await fetch(`${API_BASE_URL}/api/MataKuliah`, {
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
      error?.message ?? `Failed to create lesson subject: ${response.status}`,
    );
  }

  return response.json();
}
