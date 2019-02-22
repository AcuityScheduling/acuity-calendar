import React from 'react';
import PropTypes from 'prop-types';

const EventGroupSelect = ({
  eventGroups,
  selectedEventGroups,
  setSelectedEventGroups,
}) => {
  if (!eventGroups) return false;
  const toggleSelectedGroup = ({ isSelected, group }) => {
    if (isSelected) {
      return setSelectedEventGroups(
        selectedEventGroups.filter(groupId => groupId !== group.id)
      );
    }
    setSelectedEventGroups([...selectedEventGroups, group.id]);
  };

  return (
    <div style={{ width: '200px', margin: '125px 10px' }}>
      {eventGroups.map(group => {
        const isSelected = selectedEventGroups.includes(group.id);
        return (
          <label
            key={`selectGroup${group.id}`}
            style={{ display: 'block', marginBottom: '7px' }}
          >
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
  eventGroups: null,
  selectedEventGroups: [],
  setSelectedEventGroups: () => null,
};

EventGroupSelect.propTypes = {
  eventGroups: PropTypes.array,
  selectedEventGroups: PropTypes.array,
  setSelectedEventGroups: PropTypes.func,
};

export default EventGroupSelect;
