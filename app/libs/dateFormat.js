const formatDate = (timestamp, cFormat) => {
  const stamp = +`${timestamp}000`;
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  const date = new Date(stamp);
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const timeStr = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    return value.toString().padStart(2, '0');
  });
  return timeStr;
};
module.exports = formatDate;
