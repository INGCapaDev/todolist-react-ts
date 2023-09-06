import { FILTERS_BUTTONS } from '../consts.ts';
import type { FilterValue } from '../types/filter.d.ts';

interface Props {
  filterSelected: FilterValue;
  onFilterChanged: (filter: FilterValue) => void;
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChanged,
}) => {
  return (
    <ul className='filters'>
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? 'selected' : '';
        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault();
                onFilterChanged(key as FilterValue);
              }}>
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default Filters;
