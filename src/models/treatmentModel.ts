interface Treatment {
    treatment_id: number
    userId: number
    schedule: string
    isCompleted: boolean
    createdAt: string
    updatedAt: string
    deletedAt: string
}


interface TreatmentDescription {
    id: number
    name: string
    createdAt: string
    updatedAt: string
    deletedAt: string
}