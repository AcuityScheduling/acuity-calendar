import React from 'react';
import PropTypes from 'prop-types';

const EventGroupSelect = ({ groups, selectedGroups, setSelectedGroups }) => {
  if (!groups) return false;
  const toggleSelectedGroup = ({ isSelected, group }) => {
    if (isSelected) {
      return setSelectedGroups(
        selectedGroups.filter(groupId => groupId !== group.id)
      );
    }
    setSelectedGroups([...selectedGroups, group.id]);
  };

  return (
    <div>
      {groups.map(group => {
        const isSelected = selectedGroups.includes(group.id);
        return (
          <label key={`selectGroup${group.id}`}>
            {group.name}
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => toggleSelectedGroup({ isSelected, group })}
            />
          </label>
        );
      })}
    </div>
  );
};

EventGroupSelect.defaultProps = {
  groups: null,
  selectedGroups: null,
  setSelectedGroups: null,
};

EventGroupSelect.propTypes = {
  groups: PropTypes.array,
  selectedGroups: PropTypes.array,
  setSelectedGroups: PropTypes.func,
};

export default EventGroupSelect;
