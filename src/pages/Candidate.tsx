import { Footer, GoToTopButton, Header } from '@/components';
import { CandidateGroup } from '@/components/candidate/CandidateGroup';
import candidateData from '@/mocks/candidates.json';

export const Candidate = () => {
  return (
    <div className="container-wrap sub-page">
      <Header />
      <div className="awards-page">
        <div className="awards-title-wrap sub-title">
          <div className="container-inner">
            <h2>59회 수상자 · 작품</h2>
          </div>
        </div>
        <div className="awards-list-wrap">
          <div className="container-inner">
            <div className="awards-select-con">
              <div className="awards-title sector-title">
                <strong>59회 백상예술대상 수상자 · 작품</strong>
              </div>
              <CandidateGroup items={candidateData} />
            </div>
          </div>
        </div>
      </div>
      <GoToTopButton />
      <Footer />
    </div>
  );
};
