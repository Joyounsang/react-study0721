import { NavLink, useParams } from 'react-router-dom';

import { TabItemProps } from '@/models/replay.model';

export const TabListItem = ({ title, pathname, isDefaultItem }: TabItemProps) => {
  const { awards_id } = useParams();

  return (
    <div className="button" key={pathname}>
      <NavLink className="box-btn" to={pathname}>
        {({ isActive }) => (
          <span className={isActive || (!awards_id && isDefaultItem) ? 'font-bold' : 'text-gray-900'}>{title}</span>
        )}
      </NavLink>
    </div>
  );
};
