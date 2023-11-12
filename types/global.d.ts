export {}

declare global {
    interface ILawyerCard {
        name: string
        specialty_areas: string[]
        N_experience: number
        language: string[]
        Price_per_hour: number
        review: number
    }
  }