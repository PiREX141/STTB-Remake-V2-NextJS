const API_BASE_URL = "http://localhost:5143";

// ==================== Interfaces ====================

export interface CreateFacilityRequest {
    namaFasilitas: string;
    deskripsi: string;
    fotoUrl: string;
}

export interface CreateFacilityResponse {
    id: number;
    message: string;
}

// ==================== API Functions ====================

export async function createFacility(data: CreateFacilityRequest, token: string): Promise<CreateFacilityResponse> {
    const response = await fetch(`${API_BASE_URL}/api/Fasilitas`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(error?.message ?? `Failed to create facility: ${response.status}`);
    }

    return response.json();
}
