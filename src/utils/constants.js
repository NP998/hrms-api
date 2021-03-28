const gender = {
    MALE:0,
    FEMALE:1,
    TRANSGENDER:2
}

const userType = {
    ADMIN:0,
    EMPLOYEE:1
}

const applicationStatus = {
    APPLIED:0,
    REVIEWED:1,
    IN_PROGRESS:2,
    ON_HOLD:3,
    OFFER_ISSUED:4,
    ONBOARDED:5,
    DROPPED:6
}

module.exports.constants = {
    gender,
    userType,
    applicationStatus
}