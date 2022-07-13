import { $host } from "../../http";
//import $host from "../http";
//import { AxiosResponse } from "axios";
//import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
  static async login(moralis_session) {
    return $host.post("/api/auth/login", { moralis_session } );
  }

  static async registration(moralis_session) {
    return $host.post("/api/auth/registration", { moralis_session });
  }

  static async logout() {
    //console.log("00000000000000 auth service logout 67676");
    return $host.post("/api/auth/logout");
  }
}
