import React from 'react';
import PropTypes from 'prop-types';

const EventGroupSelect = ({
  eventGroups,
  selectedEventGroups,
  setSelectedEventGroups,
}) => {
  if (eventGroups.length === 0) return null;

  const toggleSelectedGroup = ({ isSelected, group }) => {
    if (isSelected) {
      return setSelectedEventGroups(
        selectedEventGroups.filter(groupId => groupId !== group.id)
      );
    }
    setSelectedEventGroups([...selectedEventGroups, group.id]);
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      {eventGroups.map(group => {
        const isSelected = selectedEventGroups.includes(group.id);
        return (
          <label key={`selectGroup${group.id}`} style={{ marginRight: '15px' }}>
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => toggleSelectedGroup({ isSelected, group })}
            />
            {group.name}
          </label>
        );
      })}
    </div>
  );
};

EventGroupSelect.defaultProps = {
  eventGroups: [],
  selectedEventGroups: [],
  setSelectedEventGroups: () => null,
};

EventGroupSelect.propTypes = {
  eventGroups: PropTypes.array,
  selectedEventGroups: PropTypes.array,
  setSelectedEventGroups: PropTypes.func,
};

export default EventGroupSelect;
