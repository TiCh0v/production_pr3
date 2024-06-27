import { Profile, ValidateProfileErrors } from "../../types/ProfileSchema";

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.NO_DATA];
    }

    const {
        first, lastname, age, username
    } = profile;

    const errors: ValidateProfileErrors[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
    }

    if (!username || "") {
        errors.push(ValidateProfileErrors.INCORRECT_USERNAME);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE);
    }


    return errors;
};
