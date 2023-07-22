import { CandidateListItem } from '@/components/candidate/CandidateListItem';
import type { CandidateItemListProps } from '@/models/candidate.model';

type Props = {
  items: CandidateItemListProps;
};

export const CandidateList = ({ items }: Props) => {
  return (
    <ul className="awarded-list">
      {items.map((item) => {
        const { id, image, title, award_name } = item;
        return <CandidateListItem key={id} image={image} title={title} award_name={award_name} />;
        // const { list } = item;
        // // const firstCandidate = list[0];
        // // const { id, image, title, award_name } = firstCandidate;

        // return (
        //   <>
        //     {list.map((candidate) => {
        //       const { id, image, title, award_name } = candidate;
        //       return <CandidateListItem key={id} image={image} title={title} award_name={award_name} />;
        //     })}
        //   </>
        // );
        // if (item.division_name === 'TV부문') {

        // }
      })}
    </ul>
  );
};
