 function addUI(){
	return '<div class="add" id="add_form">'
	+'<form id="join_form">'
	+'<h2>안뇽! 안뇽!</h2>'
	+'    <div class="container">'
	+'  <hr>'
	+'      <label for="member_id"><b>아이디</b></label>'
	+'      <input type="text" id="memberId" placeholder="아이디를 입력하세요" >'
		+'<button type="button" id="idck">중복확인</button><br>'

	+'      <label for="password"><b>비밀번호</b></label>'
	+'      <input type="password" id="password" placeholder="비밀번호를 입력하세요" ><br>'
	+'      <label for="name"><b>이름</b></label>'
	+'      <input type="text" id="name" placeholder="이름을 입력하세요"  ><br>'
	+'      <label for="ssn"><b>주민번호</b></label>'
	+'      <input type="text" id="ssn" placeholder=" "-"을 포함해 주민번호를 입력해주세요" ><br>'
	
	+'      <label for="address"><b>주소</b></label>'
	+'      <input type="text" id="address" placeholder="상품을 받을 주소를 입력해주세요" ><br>'
	
	+'      <label for="eMail"><b>이메일 주소</b></label>'
	+'      <input type="text" id="eMail" ptlaceholder="이메일 주소를 입력해주세요"><br>'
	
	+'      <label for="phoneNum"><b>전화번호</b></label>'
	+'      <input type="text" id="phoneNum" placeholder="전화번호를 입력해주세요" ><br>'
	+'		<p>이미 회원이신가요?<a id ="join_to_login" href="#"  style="color:dodgerblue"> 여기서 </a>로그인하세요.</p>'
	+'        <button class="j_button" type="button" id="join_submit_btn" class="join_submit_btn">회원가입</button>'
	+'    </div>'
	+'  </form>'
	+'</div>'
}; 