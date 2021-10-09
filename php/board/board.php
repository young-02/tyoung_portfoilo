<?php
    include "../connect/connect.php";
    include "../connect/session.php";
    include "../connect/sessionCheck.php";
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>

    <link rel="stylesheet" href="../assets/css/fonts.css">
    <link rel="stylesheet" href="../assets/css/var.css">
    <link rel="stylesheet" href="../assets/css/reset.css">
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <div id="wrap">
        <!-- header -->
        <header id="header">
            <?php
                include '../include/header.php';
            ?>
        </header>
        <!-- //header -->
        <main>
            <section id="mainContent">
                <h2 class="screen_out">메인 컨텐츠</h2>
                <article class="content-article">
                    <h3>게시판</h3>
                    <p>가장 빠른 새소식 업데이트</p>
                    <div class="board">
                        <div class="search">
                            <form action="boardSearch.php" name="boardSearch" method="get">
                                <fieldset>
                                    <legend class="screen_out">게시판 검색 영역</legend>
                                    <input type="search" name="searchKeyword" class="form-search" placeholder="검색어를 입력하세요!" aria-label="search" />
                                    <select name="searchOption" id="searchOption" class="form-select">
                                        <option value="title">제목</option>
                                        <option value="content">내용</option>
                                        <option value="name">이름</option>
                                    </select>
                                    <button type="submit" class="form-btn">검색</button>
                                    <a href="boardWrite.php" class="form-btn write">글쓰기</a>
                                </fieldset>
                            </form>
                        </div>
                        <table>
                            <colgroup> 
                                <col style="width: 5%;" />
                                <col />
                                <col style="width: 12%;" />
                                <col style="width: 10%;" />
                                <col style="width: 7%;" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>등록자</th>
                                    <th>등록일</th>
                                    <th>조회수</th>
                                </tr>
                            </thead>
                            <tbody>

                                <?php

                                    if(isset($_GET['page'])){
                                        $page = (int) $_GET['page'];
                                    } else{
                                        $page = 1;
                                    }         
                                    $numView = 20; //갯수
                                    $vieWLimit = ($numView * $page) - $numView; //시작점

                                    //1 ~ 20 : DESC LIMIT 0, 20     --> $page = 1  ($numView * $page) - $numView                
                                    //21 ~ 40 : DESC LIMIT 20, 20   --> $page = 2  ($numView * $page) - $numView                               
                                    //41 ~ 60 : DESC LIMIT 40, 20   --> $page = 3  ($numView * $page) - $numView                            
                                    //61 ~ 80 : DESC LIMIT 60, 20   --> $page = 4  ($numView * $page) - $numView                           
                                    //81 ~ 100 : DESC LIMIT 80, 20  --> $page = 5  ($numView * $page) - $numView                            

                                 
                                    //board + member
                                    $sql = "SELECT b.boardID, b.boardTitle, m.youName, b.boardView, b.regTime FROM myBoard b JOIN myMember m ON (m.memberID = b.memberID) ORDER BY boardID DESC LIMIT {$vieWLimit}, {$numView}";

                                    $result = $connect -> query($sql);

                                    if( $result ){
                                        $count = $result -> num_rows;

                                        if( $count > 0 ){
                                            for( $i=1; $i<=$count; $i++ ){
                                                $info = $result -> fetch_array(MYSQLI_ASSOC);
                                                echo "<tr>";
                                                echo "<td>".$info['boardID']."</td>";
                                                //get 방식은 ? 쓴다.
                                                echo "<td class='left'><a href='boardView.php?boardID={$info['boardID']}'>".$info['boardTitle']."</a></td>";
                                                echo "<td>".$info['youName']."</td>";
                                                echo "<td>".date('Y-m-d', $info['regTime'])."</td>";
                                                echo "<td>".$info['boardView']."</td>";
                                                echo "</tr>";
                                            }
                                        } else {
                                            echo "<tr><td colspan='4'>게시글이 없습니다.</td></tr>";
                                        }
                                    } else {
                                        echo "관리자에게 문의하세요 : 에러 발생 & 회원가입이 안되어 있을때 ";
                                    }
                                ?>
                                
                                <!-- <tr>
                                    <td>10</td>
                                    <td class="left"><a href="#">PHP 사이트 만들기</a></td>
                                    <td>웹쓰</td>
                                    <td>2021-07-01</td>
                                    <td>5</td>
                                </tr>  -->
                            </tbody>
                        </table>
                        <div class="page">
                            <ul>
                            <?php
                                $sql = "SELECT count(boardID) FROM myBoard";
                                $result = $connect-> query($sql);


                                $boardTotalCount = $result -> fetch_array(MYSQLI_ASSOC);
                                $boardTotalCount =  $boardTotalCount['count(boardID)'];

                                // echo "전체갯수:" .$boardTotalCount. "<br>";

                                //총 페이지수 
                                $boardTotalpage = ceil($boardTotalCount / $numView);
                                // echo "총페이지수:" . $boardTotalpage;
                                


                                //1 2 3 4 5 6 7  8 9 10 11
                                //현재 페이지를 기준으로 보여주고 싶은 갯수 
                                $pageView = 5;
                                $startPage = $page - $pageView;
                                $endPage = $page + $pageView;

                                // 처음 페이지 초기화
                                if($startPage < 1) $startPage = 1;

                                // 마지막 페이지 초기화
                                if($endPage >= $boardTotalpage) $endPage = $boardTotalpage;
                                
                                //처음으로 
                                if($page !=1 ){
                                    echo "<li><a href='board.php?page=1'>처음으로</a></li>";
                                }
                                //이전페이지 
                                if($page !=1 ){
                                    $prevPage = $page -1 ;
                                    echo "<li><a href='#board.php?page=1'>이전</a></li>";
                                }
                           

                                for( $i=$startPage; $i<=$endPage; $i++ ){
                                    $active = '';
                                    if( $i == $page ) $active = 'active';

                                    echo "<li class='{$active}'><a href='board.php?page={$i}'>{$i}</a></li>";
                                };
                                     //다음 페이지
                                     if( $page != $endPage ){
                                        $nextPage = $page + 1;
                                        echo "<li><a href='board.php?page={$nextPage}'>다음</a></li>";
                                    }
    
                                    //마지막
                                    if( $page != $endPage ){
                                        echo "<li><a href='board.php?page={$boardTotalPage}'>마지막으로</a></li>";
                                    }

                            ?>
                                <!-- <li><a href="#">처음으로</a></li>
                                <li><a href="#">이전</a></li>
                                <li class="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">다음</a></li>
                                <li><a href="#">마지막으로</a></li> -->
                            </ul>
                        </div>
                    </div>
                </article>
            </section>
        </main>
       <!-- footer  -->
        <footer id="footer">
            <?php
                include '../include/footer.php';
            ?>
        </footer>
      <!-- footer -->
    </div>
    
</body>
</html>