const API_BASE_URL = "http://localhost:5143";

// ==================== Interfaces ====================

export interface Lecturer {
    id: number;
    nama_Lengkap: string;
    bidang_Keahlian: string;
    pendidikan_Terakhir: string;
}

export interface Major {
    id: number;
    tingkat: string;
    nama_Prodi: string;
    ketua_Prodi_Id: number | null;
    ketua_Prodi: Lecturer | null;
}

export interface CreateMajorRequest {
    tingkat: string;
    namaProdi: string;
    ketuaProdiId?: number | null;
}

export interface CreateMajorResponse {
    id: number;
    message: string;
}

// ==================== API Functions ====================

export async function getAllMajors(): Promise<Major[]> {
    const response = await fetch(`${API_BASE_URL}/api/ProgramStudi`);

    if (!response.ok) {
        throw new Error(`Failed to fetch majors: ${response.status}`);
    }

    return response.json();
}

export async function createMajor(data: CreateMajorRequest, token: string): Promise<CreateMajorResponse> {
    const response = await fetch(`${API_BASE_URL}/api/ProgramStudi`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(error?.message ?? `Failed to create major: ${response.status}`);
    }

    return response.json();
}
