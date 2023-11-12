export {}

declare global {
    interface ILawyerCard {
        id: number;
        name: string;
        language: string[];
        employed_type: string;
        specialty_areas: string[];
        location_km: number;
        price_per_hour: number;
        winning_rate: number;
        review: number;
        provono: number;
        n_experience: number;
        earlist_available_within_n_day: number;
        average_response_hour: number;
        y: number;
        scores: number;
    }
}
