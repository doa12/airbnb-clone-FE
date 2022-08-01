// 토큰을 로컬스토리지에 set
localStorage.setItem("key", token);

// 토큰을 로컬스토리지에서 get
localStorage.getItem("key");

// 로그아웃은 토큰을 로컬스토리지에서 지우는 것
localStorage.removeItem("key");



fetch('http://ip/api/login/', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    'username': 'kim',
    'password': '1234'
  })
})
.then(response => response.json())
.then(response => {
  if (response.token) {
    localStorage.setItem('wtw-token', response.token);
  }
})

let token = localStorage.getItem('wtw-token') || '';

fetch('http://ip//api/mypage/wishlist?&page=0부터시작&size=20&sort=createdAt,DESC/', {
  headers: {
      'Authorization': token,
  }
})
.then(response => response.json())
.then(response => {
   console.log(response.data);
})





//쿠키는 이렇게 했었는데...
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const getCookie = () => {
  if (cookies.get("Authorization")) {
    return cookies.get("Authorization").substr(7);
  } else {
    return null;
  }
};

const setCookie = (token, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * exp);
  document.cookie = `Authorization=${token}; expires=${date}; path=/`;
};

// const deleteCookie = () => {
//   cookies.remove("Authorization");
// };

const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();

  console.log(date);
  document.cookie = name + "=; expires=" + date + "; path=/";
  window.location.reload();
};

export { getCookie, setCookie, deleteCookie };
