import { getLeftPosition } from './EventDragDrop';

const columnWidths = [282, 571, 281, 282, 281, 282, 280];

describe('Event drag and drop logic', () => {
  it('gets the correct left position of the event while dragging', () => {
    let leftPosition = getLeftPosition({
      columnIndex: 6,
      columnMoves: 0,
      columnWidths,
    });
    expect(leftPosition).toEqual(0);

    leftPosition = getLeftPosition({
      columnIndex: 1,
      columnMoves: -1,
      columnWidths,
    });
    expect(leftPosition).toEqual(-282);

    leftPosition = getLeftPosition({
      columnIndex: 2,
      columnMoves: -1,
      columnWidths,
    });
    expect(leftPosition).toEqual(-571);

    leftPosition = getLeftPosition({
      columnIndex: 4,
      columnMoves: 2,
      columnWidths,
    });
    expect(leftPosition).toEqual(563);
  });
});
