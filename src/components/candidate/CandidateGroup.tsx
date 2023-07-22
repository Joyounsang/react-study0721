import type { CandidateItemListProps } from '@/models/candidate.model';
import { CandidateList } from '@/components/candidate/CandidateList';

type Props = {
  items: CandidateItemListProps;
};

export const CandidateGroup = ({ items }: Props) => {
  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.division} className="awards-sector-wrap sector01">
            <div className="award-sector-title">
              <h3>{item.division_name}</h3>
            </div>
            <div className="awards-con">
              {!Object.keys(item.winner).length ? null : (
                <div className="awards-prize">
                  <div className="awards-prize-con">
                    <span className="list-thumb">
                      <img src={item.winner.image} alt={item.winner.title} />
                    </span>
                    <span className="title">
                      <strong className="title-prize">{item.winner.award_name}</strong>
                      <em>{item.winner.title}</em>
                      <span className="name">
                        작품제목 : List내부에 있는데이터중에 하나인데 어케 표현함? // 그리고 섹션에 클래스를 다르게
                        부여할수있는 효율적인방법은?
                      </span>
                    </span>
                  </div>
                </div>
              )}

              <div className="awards-awarded">
                <CandidateList items={item.list} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
