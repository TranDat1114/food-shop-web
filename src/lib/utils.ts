import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { jwtDecode } from "jwt-decode";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function isAdmin() {

  return getUser().role.includes('Admin');
}
export interface jwtDecode {
  unique_name: string;
  email: string;
  nameid: string;
  role: string[];
  nbf: number;
  exp: number;
  iat: number;
  iss: string;
  aud: string;
}

export function getUser(): jwtDecode {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    return {
      unique_name: '',
      email: '',
      nameid: '',
      role: [],
      nbf: 0,
      exp: 0,
      iat: 0,
      iss: '',
      aud: ''
    };
  }
  const decodedToken = jwtDecode(token) as jwtDecode;
  return decodedToken;
}


export function isTokenExpired(token: string) {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000); // Thời gian hiện tại tính bằng giây

    // Kiểm tra thời gian hết hạn
    if (!decodedToken.exp) {
      return true; // Token không có thời gian hết hạn
    }

    if (decodedToken.exp < currentTime) {
      return true; // Token đã hết hạn
    } else {
      return false; // Token vẫn còn hiệu lực
    }
  } catch (error) {
    return true; // Token không hợp lệ hoặc không thể giải mã
  }
}