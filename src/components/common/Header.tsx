export const Header = () => {
  return (
    <header className="header-wrap sub">
      <div className="container-inner">
        <h1 className="logo">
          <a href="/">
            <span>제59회 백상예술대상 Baeksang Arts Award</span>
          </a>
        </h1>
        <div className="gnb">
          <ul>
            <li>
              <a className="on" href="/about">
                <span>시상식 소개</span>
              </a>
            </li>
            <li>
              <a className="" href="/candidate">
                <span>59회 수상자 · 작품</span>
              </a>
            </li>
            <li>
              <a className="" href="/replay">
                <span>다시보기</span>
              </a>
            </li>
            <li>
              <a className="" href="/winners">
                <span>역대 수상</span>
              </a>
            </li>
            <li>
              <a className="" href="/notice">
                <span>공지사항</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};
