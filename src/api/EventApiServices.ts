const API_BASE_URL = "http://localhost:5143";

// ==================== Interfaces ====================

export interface EventCategory {
    id: number;
    nama_Kategori: string;
}

export interface Event {
    id: number;
    nama_Kegiatan: string;
    deskripsi: string;
    tanggal_Mulai: string;
    tanggal_Selesai: string;
    lokasi: string;
    kategori_Id: number;
    kategori_Kegiatan: EventCategory | null;
}

export interface CreateEventRequest {
    namaKegiatan: string;
    deskripsi: string;
    tanggalMulai: string;
    tanggalSelesai: string;
    lokasi: string;
    kategoriId: number;
}

export interface CreateEventResponse {
    id: number;
    message: string;
}

// ==================== API Functions ====================

export async function getAllEvents(): Promise<Event[]> {
    const response = await fetch(`${API_BASE_URL}/api/Kegiatan`);

    if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.status}`);
    }

    return response.json();
}

export async function createEvent(data: CreateEventRequest, token: string): Promise<CreateEventResponse> {
    const response = await fetch(`${API_BASE_URL}/api/Kegiatan`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(error?.message ?? `Failed to create event: ${response.status}`);
    }

    return response.json();
}
