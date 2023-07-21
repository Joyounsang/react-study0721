import { Footer, GoToTopButton, Header } from '@/components';
import { useParams } from 'react-router-dom';
import replayData from '@/mocks/replays.json';
import { TabItemListProps } from '@/models/replay.model';
import { TabList } from '@/components/replay/TabList';
import { VideoList } from '@/components/replay/VideoList';

export const Replay = () => {
  const { awards_id } = useParams();

  const id = awards_id ? Number(awards_id) : 59;

  const tabListData: TabItemListProps = [
    { title: '59회 백상', pathname: '/replay/59', isDefaultItem: true },
    { title: '58회 백상', pathname: '/replay/58', isDefaultItem: false },
  ];

  return (
    <div className="container-wrap sub-page">
      <Header />
      <div className="vod-page">
        <div className="notice-title-wrap sub-title">
          <div className="container-inner">
            <h2>다시보기</h2>
            <TabList items={tabListData}>
              <div className="button">
                <a className="box-btn" href="https://tv.jtbc.co.kr/clip/pr10010312/pm10024332" target="_blank">
                  영상더보기
                </a>
              </div>
            </TabList>
          </div>
        </div>
        <div className="replay-list-wrap">
          <div className="container-inner">
            <div className="nominee-award-sector sector-title">
              <strong className="nominee-award">{id}회 백상예술대상</strong>
            </div>
            <VideoList awardsId={id} items={replayData} />

            <div className="dim-wrap">
              <div className="dim-con">
                <button type="button" className="close-btn">
                  <img src="http://images.jtbc.co.kr/baeksang/btn_close.png" alt="닫기" />
                </button>
                <div className="replay-area"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoToTopButton />
      <Footer />
    </div>
  );
};
