<h1><a href="../pages/main.php">PHP</a></h1>
<nav>
    <h2 class="screen_out">메인 메뉴</h2>
    <ul>
        <li aria-haspopup="true"><a href="../pages/comment.php">댓글</a></li>
        <li><a href="#">강의</a></li>
        <li><a href="#">MySQL</a></li>
        <li><a href="../login/login.php">로그인</a></li>
        <li><a href="../board/board.php">게시판</a></li>
    </ul>
</nav>
<!-- <div class="member">
    <strong class="screen_out">회원 정보 영역</strong>
    <a href="../login/login.php">로그인</a>
    <a href="../login/join.php">회원가입</a>
</div> -->

<div class="member">
    <strong class="screen_out">회원 정보 영역</strong>
    <ul>
    <?php if( isset($_SESSION['memberID']) ){ ?>
        <li><?=$_SESSION['youName']?>님 환영합니다.</li>
        <li><a href="../login/logout.php">로그아웃</a></li>
    <?php } else { ?>    
        <li><a href="../login/login.php">로그인</a></li>
        <li><a href="../login/join.php">회원가입</a></li>       
    <?php } ?> 
    </ul>
</div>

<!-- 
    회원가입 
    1. table 생성
    2. 회원가입 페이지 만들기
    3. 회원 데이터를 가져오기
    4. 데이터 유효성 검사
    5. 회원인지 아닌지 확인(이메일/핸드폰번호)
    6. 회원 데이터에 이메일/핸드폰 번호 검색
    7. 제이터 값이 0이면 회원 가입
    8. 회원 테이블 데이터 저장


    로그인
    1. 데이터 입력
    2. 데이터 가져오기 
    3. 데이터 유효성검사
    4. 데이터 조회
    5. 데이터가 있으면 로그인 처리
    6. 세션 시작

    로그아웃
    1.세션 아웃
    
    게시판
    1.테이블 만들기(createBoard.php)
    2.게시글 작성(boardWrite.php)
    3.게시글 정보 가져오기 ->DB 전송(boardWriteSave.php)
    4.저장된 게시글 불러오기 (board.php)
    5.게시글 보기 (boardView.php)
    6. 수정(boardModify.php)
    7. 수정 글 가져오기 (boardModifySave.php)
    8. 삭제하기 (boardRemove.php)
    9. 서치하기(boardsearch)
    10. 게시글 10개씩 보여주기(board.php)
    
-->