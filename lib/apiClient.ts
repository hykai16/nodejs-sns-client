import axios from "axios";

/*
axios.get("http://localhost:5000/api/users");
を、毎回毎回こんな感じで書かないで済むように、
「共通の設定をまとめたオブジェクト（＝apiClient）」を作っているだけです。

つまり↓↓↓
// 共通設定済みのaxios
import apiClient from "./apiClient";

// 毎回これでOKになる！
apiClient.get("/users");
apiClient.post("/login", { email, password });
*/
//バックエンドとの接続の際に
//共通の設定を定義しておく
const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
