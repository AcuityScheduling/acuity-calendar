import { CLASS_PREFIX } from '../Calendar/constants';

const cp = `.${CLASS_PREFIX}`;
const month = `.${CLASS_PREFIX}__month`;

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
    ${month} {
        height: 250px;
        width: 250px;
    }
    ${month}__date-wrapper:hover {
        background: none;
    }
    ${month}__date-wrapper {
        position: relative;
        cursor: default;
        top: auto;
        right: auto;
        margin: 0 auto;
    }
    ${month}__column-header {
        text-transform: none;
        padding: 5px;
    }
    ${month}__cell {
        position: relative;
        display: flex;
        align-items: center;
    }
    ${month}__date {
        text-align: center;
        position: relative;
        z-index: 10;
    }
`;

export default styles;
