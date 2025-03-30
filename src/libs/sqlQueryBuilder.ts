import { TreatmentData } from "../models/treatment"

// Use To Insert into table user_treatments, user_treatment_descriptions, user_treatment_prescriptions at the same time because the last two table depend on the firs one
export const buildInsertOneTreatmentQueryString = (payload: TreatmentData): string => {
    let index = 3

    let descriptionsQuery = ``
    for(let i = 0; i<payload.descriptions.length; i++) {
        if (i < payload.descriptions.length -1) {
            descriptionsQuery += `((select user_treatment_id from inserted_user_treatment), $${index+1}, NOW(), NOW()),`
        } else {
            descriptionsQuery += `((select user_treatment_id from inserted_user_treatment), $${index+1}, NOW(), NOW())`
        }
        index += 1
    }

    let prescriptionsQuery = ``
    for(let i = 0; i<payload.prescriptions.length; i++) {
        if (i < payload.prescriptions.length -1) {
            prescriptionsQuery += `((select user_treatment_id from inserted_user_treatment), $${index+1}, NOW(), NOW()),`
        } else {
            prescriptionsQuery += `((select user_treatment_id from inserted_user_treatment), $${index+1}, NOW(), NOW())`
        }
        index += 1
    }

    const query = `
        WITH inserted_user_treatment AS (
            INSERT INTO user_treatments
                (user_id, cost, schedule, created_at, updated_at)
            values
                ($1, $2, $3, NOW(), NOW())
                RETURNING user_treatment_id
        ), inserted_user_treatment_description as (
            insert into user_treatment_descriptions
                (user_treatment_id, description_id, created_at, updated_at)
            values
                ${descriptionsQuery}
        )
        insert into user_treatment_prescriptions
            (user_treatment_id, prescription_id, created_at, updated_at)
        values
            ${prescriptionsQuery};
    `
    return query
}