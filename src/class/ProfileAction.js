import u_img from '../img/profileA.jpg';

class ProfileAction {
    constructor() {
        this.profiles = [
            {
                "id": 1,
                "username": "joshadegbola",
                "profile_name": "Josh Ade",
                "user_img": u_img,
                "followers": 10000,
                "following": 120,
                "profile_bio": "Chilling with the guys"
            }
        ]
    }

    get() {
        return this.profiles
    }

    set(profile) {
        return this.profiles.push(profile)
    }
}

export default ProfileAction;