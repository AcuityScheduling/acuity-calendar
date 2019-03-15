import { CLASS_PREFIX } from '../../Calendar/constants';

const cp = `.${CLASS_PREFIX}`;
const dayGrid = `.${CLASS_PREFIX}__day-grid`;

const styles = `
    ${cp}__heatmap-header {
        font-size: 14px;
    }
    ${cp}__heatmap__cell {
        background: #26ada0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    ${dayGrid} {
        height: 250px;
        width: 250px;
    }
    ${dayGrid}__date-wrapper:hover {
        background: none;
    }
    ${dayGrid}__date-wrapper {
        position: relative;
        cursor: default;
        top: auto;
        right: auto;
        margin: 0 auto;
    }
    ${dayGrid}__column-header {
        text-transform: none;
        padding: 5px;
    }
    ${dayGrid}__cell {
        position: relative;
        display: flex;
        align-items: center;
    }
    ${dayGrid}__date {
        text-align: center;
        position: relative;
        z-index: 10;
    }
`;

export default styles;
