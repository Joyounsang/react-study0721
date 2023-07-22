export type Winner = {
  image: string;
  award_name: string;
  title: string;
};

export type List = {
  image: string;
  id: string;
  award_name: string;
  sub_title: string;
  title: string;
};

export type CandidateItemProps = {
  division: string;
  division_name: string;
  has_sector_winner: boolean;
  winner: Winner;
  list: List;
};

export type CandidateItemListProps = CandidateItemProps[];
