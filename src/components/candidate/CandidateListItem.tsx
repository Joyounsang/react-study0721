import type { CandidateItemListProps } from '@/models/candidate.model';

export const CandidateListItem = ({ title, image, award_name }: CandidateItemListProps) => {
  return (
    <li>
      <span className="list-thumb">
        <img src={image} alt={title} />
      </span>
      <span className="title">
        <strong className="title-prize">{award_name}</strong>
        <em>{title}</em>
        <span className="name"></span>
      </span>
    </li>
  );
};
