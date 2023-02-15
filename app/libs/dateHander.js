

const doubleNum = num => {
  return +num >= 10 ? num : '0' + num;
};
const getCurDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = doubleNum(now.getMonth() + 1);
  const day = doubleNum(now.getDate());
  return `${year}年${month}月${day}日`;
};
const getWeek = () => {
  const now = new Date();
  const day = now.getDay();
  let week = '';
  switch (day) {
    case 1:
      week = '星期一';
      break;
    case 2:
      week = '星期二';
      break;
    case 3:
      week = '星期三';
      break;
    case 4:
      week = '星期四';
      break;
    case 5:
      week = '星期五';
      break;
    case 6:
      week = '星期六';
      break;
    case 0:
      week = '星期日';
      break;
    default:
      week = '';
      break;
  }
  return week;
};
const getCountDays = () => {
  const now = new Date();
  const curMonth = now.getMonth();
  now.setMonth(curMonth + 1);
  now.setDate(0);
  return now.getDate();
};
const distanceDay = val => {
  const now = new Date();
  const day = now.getDate();
  const countDays = getCountDays();
  if (val < day) {
    return countDays - day + val;
  }
  return val - day;
};
const distanceWeek = () => {
  const now = new Date();
  const day = now.getDay();
  return 6 - day;
};
const getDistancNewYearDay = () => {
  const now = new Date();
  const year = now.getFullYear() + 1;
  const newYear = new Date(`${year}/01/01 00:00:00`);
  const t = newYear - now;
  const d = Math.floor(t / 1000 / 60 / 60 / 24);
  return d;
};
const getDistancSpringFestivalDay = () => {
  const now = new Date();
  const newYear = new Date('2024/02/10 00:00:00');
  const t = newYear - now;
  const d = Math.floor(t / 1000 / 60 / 60 / 24);
  return d;
};
const getDistancHouseDay = () => {
  const now = new Date();
  const newYear = new Date('2023/11/30 00:00:00');
  const t = newYear - now;
  const d = Math.floor(t / 1000 / 60 / 60 / 24);
  return d;
};
const getTxt = () => {
  const date = getCurDate();
  const week = getWeek();
  const sixDay = distanceWeek();
  const newYearDay = getDistancNewYearDay();
  const springFestivalDay = getDistancSpringFestivalDay();
  const houseDay = getDistancHouseDay();
  const result = `
      【摸鱼办】提醒您：😏
      今天是${date}，${week}，你好摸鱼人！工作再忙，一定不要忘记摸鱼哦！有事没事起身去茶水间，去厕所、走走，去找同事聊聊八卦别老在工位上坐着，钱是老板的，但命是自己的！
      温馨提示：
      距离【5号发工资】：${distanceDay(5)}天
      距离【10号发工资】：${distanceDay(10)}天
      距离【15号发工资】：${distanceDay(15)}天
      距离【20号发工资】：${distanceDay(20)}天
      距离【25号发工资】：${distanceDay(25)}天
      距离【28号发工资】：${distanceDay(28)}天
      距离【30号发工资】：${distanceDay(30)}天
      距离【周六】还有：${sixDay}天
      距离【元旦】还有：${newYearDay}天
      距离【春节】还有：${springFestivalDay}天
      距离【交房】还有：${houseDay}天
      愿早日退休！！！愿房贷早日还完！！！愿各位摸鱼人安好！！！
      摸鱼是一门学问，是属于上班族的浪漫！最后，
      祝愿天下所有摸鱼人，都能愉快的渡过每一天.
    `;
  return result;
};
module.exports = getTxt;
