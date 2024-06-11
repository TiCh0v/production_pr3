export {
    ProfileSchema, 
    Profile
} from './model/types/ProfileSchema'


export {
    profileActions,
    profileReducer
} from './model/slice/profileSclice'

export {
    fetchProfileData
} from './model/services/fetchProfileData/fetchProfileData'

export {
    ProfileCard
} from './ui/ProfileCard'