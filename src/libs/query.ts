interface TreatmentData {
    user_id : number,
    descriptions: number[],
    prescriptions: number[],
    cost: number
    schedule: string
}

const buildInsertOneTreatmentQuery = (payload: TreatmentData) => {

}

const queryString = `
WITH inserted_user_treatment AS (
    INSERT INTO user_treatments
        (user_id, cost, schedule, created_at, updated_at)
    values
        (1, 2000, NOW(), NOW(), NOW())
        RETURNING user_treatment_id
), inserted_user_treatment_description as (
    insert into user_treatment_descriptions
        (user_treatment_id, description_id, created_at, updated_at)
    values
        ((select user_treatment_id from inserted_user_treatment), 1, NOW(), NOW())
)
insert into user_treatment_prescriptions
    (user_treatment_id, prescription_id, created_at, updated_at)
values
    ((select user_treatment_id from inserted_user_treatment), 1, NOW(), NOW());

`