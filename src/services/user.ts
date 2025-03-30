import { UserRepository } from "../repository/user";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository()  
    }

    async getAllUser() {   
        try {
            return await this.userRepository.getAllUser()
        } catch(err) {
            throw err
        }
    }
}