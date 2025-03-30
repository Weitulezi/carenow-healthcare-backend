export interface userTreatmentDescription {
    user_treatment_id: number
    description_id: number
}

export interface userTreatmentPrescription {
    user_treatment_id: number
    prescription_id: number
}

export interface TreatmentData {
    user_id : number,
    descriptions: userTreatmentDescription["user_treatment_id"][],
    prescriptions: userTreatmentPrescription["prescription_id"][],
    cost: number
    schedule: string
}