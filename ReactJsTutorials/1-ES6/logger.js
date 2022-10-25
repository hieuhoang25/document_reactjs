

export const TYPE_LOG = "HICODE"
export const HELLO = "HICODE"
export const TEST = "HICODE"
function logger(log, type='log') {
    console[type](log);
}
export dafault logger; // 1 module chỉ export 1 