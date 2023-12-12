console.log('js열림');

// 1. 아이디 저장하는 배열
const idArray = [];
// 2. 패스워드 저장하는 배열
const pwArray = [];

// ========================== 함수 밖에 선안한 이유 =============================
    // 여러 함수들 { }에서 사용하기 때문에. // 선안 1번하고 누적 저장 [편하게할려고]


// ========================== 1. 회원가입 함수  =================================
function 회원가입(){ // f s // 선언부 // 실행조건 : 가입버튼을 클릭했을때.
// [입력]
const signId = document.querySelector('#signId').value;
const signPw = document.querySelector('#signPw').value;
// [처리]
idArray.push( signId );
pwArray.push( signPw ); // 아이디와 패스워드 인덱스 동일하게.
// [출력]
alert('회원가입이 되었습니다.');
    // 성공후 해당 input value 값 초기화
    document.querySelector('#signId').value = '';
    document.querySelector('#signPw').value = '';

} // f e

// ========================== 2. 로그인 함수  ===================================
function 로그인(){ // f s // 선언부 // 실행조건 : 로그인버튼을 클릭했을때.
// [입력]
const loginId = document.querySelector('#loginId').value;
const loginPw = document.querySelector('#loginPw').value;
// [처리]    배열명.indexOf( 값 )
const sIndex = idArray.indexOf( loginId );
if( sIndex >= 0 && pwArray[sIndex] == loginPw){
    // 1. 만약에 입력받은 로그인 아이디가 배열내 존재하면
    // 2. 찾은 아이디 인덱스의 패스워드도 동일한지.
// [출력]
    alert('로그인 성공');
}else{
    alert('회원정보가 없습니다.');
}

} // f e